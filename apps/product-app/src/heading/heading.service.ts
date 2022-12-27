import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { CreateHeadingDto } from "./dto/create-heading.dto";
import { UpdateHeadingDto } from "./dto/update-heading.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Heading } from "./entities/heading.entity";
import { Repository } from "typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";

@Injectable()
export class HeadingService {
  constructor(
    @InjectRepository(Heading)
    private readonly headingRepository: Repository<Heading>,
  ) {}

  async create(createHeadingDto: CreateHeadingDto) {
    const heading = new Heading();
    heading.name = createHeadingDto.name;
    heading.description = createHeadingDto.description;
    heading.priority = createHeadingDto.priority;
    heading.createAt = new Date();
    heading.lastUpdate = heading.createAt;
    return await this.headingRepository.save(heading).catch(error => {
      switch (error.code) {
        case "ER_DUP_ENTRY":
          throw new ConflictException(error.message);
          break;
      }
    });
  }

  async findAll(query: PaginateQuery): Promise<Paginated<Heading>> {
    return await paginate(query, this.headingRepository, {
      relations: ["sections"],
      sortableColumns: ["id", "name", "createAt", "lastUpdate"],
      //nullSort: 'first',
      searchableColumns: ["name", "description"],
      defaultSortBy: [["priority", "DESC"]],
      filterableColumns: {
        createAt: [FilterOperator.GTE, FilterOperator.LTE],
        lastUpdate: [FilterOperator.GTE, FilterOperator.LTE],
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
    return `This action returns a #${id} heading`;
  }

  update(id: number, updateHeadingDto: UpdateHeadingDto) {
    return `This action updates a #${id} heading`;
  }

  remove(id: number) {
    return `This action removes a #${id} heading`;
  }
}
