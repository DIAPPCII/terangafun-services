import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { CreateInterestDto } from "./dto/create-interest.dto";
import { UpdateInterestDto } from "./dto/update-interest.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Interest } from "./entities/interest.entity";
import { FilterOperator, paginate, PaginateQuery } from "nestjs-paginate";

@Injectable()
export class InterestService {
  constructor(
    @InjectRepository(Interest)
    private readonly interestRepositoy: Repository<Interest>,
  ) {}
  async create(createInterestDto: CreateInterestDto) {
    const interest = new Interest();
    interest.name = createInterestDto.name;
    interest.description = createInterestDto.description;
    interest.createAt = new Date();
    interest.lastUpdateDate = interest.createAt;
    return await this.interestRepositoy.save(interest).catch(error => {
      switch (error.code) {
        case "ER_DUP_ENTRY":
          throw new ConflictException(error.message);
          break;
      }
    });
  }

  async findAll(query: PaginateQuery) {
    return await paginate(query, this.interestRepositoy, {
      sortableColumns: ["id", "name", "createAt", "lastUpdateDate"],
      //nullSort: 'first',
      searchableColumns: ["name", "description"],
      defaultSortBy: [["name", "ASC"]],
      filterableColumns: {
        createAt: [FilterOperator.GTE, FilterOperator.LTE],
        lastUpdateDate: [FilterOperator.GTE, FilterOperator.LTE],
      },
    }).catch(error => {
      switch (error.code) {
        case "ER_WRONG_VALUE":
          throw new BadRequestException(error.message);
          break;
      }
      throw new InternalServerErrorException(error.message);
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} interest`;
  }

  update(id: number, updateInterestDto: UpdateInterestDto) {
    return `This action updates a #${id} interest`;
  }

  remove(id: number) {
    return `This action removes a #${id} interest`;
  }
}
