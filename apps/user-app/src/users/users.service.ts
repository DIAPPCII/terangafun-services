import { ConflictException, Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { createHmac } from "crypto";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { CreateCognitoUserDto } from "./dto/create-cognito-user.dto";
import { CognitoIdentityProviderClient, SignUpCommand } from "@aws-sdk/client-cognito-identity-provider";
import { Interest } from "../interest/entities/interest.entity";
import { TargetDto } from "./dto/target.dto";

@Injectable()
export class UsersService {
  clientId = "1qth7qh0b72mbgpc164i8i222u";
  clientSecret = "1cvrv9dlk0d0mjtm0a3r2utlkbcf5v9lb4hc8mp7cuc0uus3ueni";
  client = new CognitoIdentityProviderClient({
    region: "eu-west-3",
  });

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  generateHashSecret(username) {
    const hasher = createHmac("sha256", this.clientSecret);
    hasher.update(`${username}${this.clientId}`);
    return hasher.digest("base64");
  }

  async signUp(createUserDto: CreateUserDto) {
    Logger.debug("new registration {}");
    const user = new User();
    user.email = createUserDto.email;
    user.phone = createUserDto.phone;
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.isPublic = true;
    user.isVerified = false;
    user.createAt = new Date();
    user.lastUpdateDate = user.createAt;
    return await this.usersRepository
      .save(user)
      .then(async user => {
        Logger.debug("registration saved, trying to create account on cognito {}");
        const cognitoUser = new CreateCognitoUserDto();
        cognitoUser.Password = createUserDto.password;
        if (user.email !== undefined && user.email !== null) {
          cognitoUser.Username = user.email;
        } else {
          cognitoUser.Username = user.phone;
        }
        cognitoUser.ClientId = this.clientId;
        cognitoUser.SecretHash = this.generateHashSecret(cognitoUser.Username);
        cognitoUser.UserAttributes = [
          { Name: "custom:tf_id", Value: user.id },
          { Name: "given_name", Value: user.firstName ?? "UNKNOW" },
          { Name: "family_name", Value: user.lastName ?? "UNKNOW" },
        ];
        await this.client
          .send(new SignUpCommand(cognitoUser))
          .then(async output => {
            user.cognitoId = output.UserSub;
            await this.usersRepository.update(user.id, user);
            Logger.debug("Registration done successfull {}");
          })
          .catch(error => {
            Logger.error(error);
          });
      })
      .catch((err: any) => {
        switch (err.code) {
          case "ER_DUP_ENTRY":
            throw new ConflictException(err.message);
            break;
        }
      });
  }

  async findAll(query: PaginateQuery): Promise<Paginated<User>> {
    return paginate(query, this.usersRepository, {
      relations: ["interests"],
      sortableColumns: ["id", "alias", "firstName", "lastName", "createAt", "lastUpdateDate", "lastConnectionDate"],
      //nullSort: 'first',
      searchableColumns: [
        "alias",
        "firstName",
        "lastName",
        "email",
        "phone",
        //'groups.id',
      ],
      defaultSortBy: [["createAt", "DESC"]],
      filterableColumns: {
        createAt: [FilterOperator.GTE, FilterOperator.LTE],
        lastUpdateDate: [FilterOperator.GTE, FilterOperator.LTE],
        lastConnectionDate: [FilterOperator.GTE, FilterOperator.LTE],
      },
    });
  }

  async findOne(id: string): Promise<User> {
    return this.usersRepository.findOne({ where: { id }, relations: ["interests"] });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  remove(id: string) {
    return this.usersRepository.delete({ id });
  }

  addInterest(id: string, targetDto: TargetDto) {
    return this.usersRepository.findOneBy({ id });
  }

  async getInterests(id: string) {
    const user = await this.findOne(id);
    console.log(user);
    return user.interests;
  }
}
