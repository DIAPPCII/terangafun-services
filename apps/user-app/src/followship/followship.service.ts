import { Injectable } from "@nestjs/common";
import { UpdateFollowshipDto } from "./dto/update-followship.dto";
import { User } from "../users/entities/user.entity";
import { Followship } from "./entities/followship.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { FilterOperator, paginate, PaginateQuery } from "nestjs-paginate";

@Injectable()
export class FollowshipService {
  constructor(
    @InjectRepository(Followship)
    private readonly followshipRepository: Repository<Followship>,
  ) {}
  async create(follower: User, followed: User) {
    let followship = await this.findOne(follower.id, followed.id);
    if (followship == null) {
      followship = new Followship();
      followship.follower = follower;
      followship.followed = followed;
      return await this.followshipRepository.save(followship);
    }
    return followship;
  }

  async findAll(query: PaginateQuery) {
    return await paginate(query, this.followshipRepository, {
      sortableColumns: [
        "follower.id",
        "follower.alias",
        "follower.firstName",
        "follower.lastName",
        "follower.createAt",
        "follower.lastUpdateDate",
        "follower.lastConnectionDate",
        "followed.id",
        "followed.alias",
        "followed.firstName",
        "followed.lastName",
        "followed.createAt",
        "followed.lastUpdateDate",
        "followed.lastConnectionDate",
      ],
      searchableColumns: [
        "follower.alias",
        "follower.firstName",
        "follower.lastName",
        "follower.email",
        "follower.phone",
        "followed.alias",
        "followed.firstName",
        "followed.lastName",
        "followed.email",
        "followed.phone",
      ],
      filterableColumns: {
        lastUpdateDate: [FilterOperator.GTE, FilterOperator.LTE],
      },
    });
  }

  async findOne(followerId: string, followedId) {
    return await this.followshipRepository.findOne({
      where: {
        follower: { id: followerId },
        followed: { id: followedId },
      },
      relations: ["follower", "followed"]!,
    });
  }

  update(id: number, updateFollowshipDto: UpdateFollowshipDto) {
    return `This action updates a #${id} followship`;
  }

  remove(id: number) {
    return `This action removes a #${id} followship`;
  }
}
