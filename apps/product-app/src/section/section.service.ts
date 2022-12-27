import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { CreateSectionDto } from "./dto/create-section.dto";
import { UpdateSectionDto } from "./dto/update-section.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Section } from "./entities/section.entity";
import { Repository } from "typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";

@Injectable()
export class SectionService {
  constructor(@InjectRepository(Section) private readonly sectionRepository: Repository<Section>) {}

  async create(createSectionDto: CreateSectionDto) {
    const section = new Section();
    section.name = createSectionDto.name;
    section.description = createSectionDto.description;
    section.priority = createSectionDto.priority;
    section.createAt = new Date();
    section.lastUpdate = section.createAt;
    return await this.sectionRepository.save(section).catch(error => {
      switch (error.code) {
        case "ER_DUP_ENTRY":
          throw new ConflictException(error.message);
          break;
      }
    });
  }

  async findAll(query: PaginateQuery): Promise<Paginated<Section>> {
    return await paginate(query, this.sectionRepository, {
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
    return `This action returns a #${id} section`;
  }

  update(id: number, updateSectionDto: UpdateSectionDto) {
    return `This action updates a #${id} section`;
  }

  remove(id: number) {
    return `This action removes a #${id} section`;
  }
}
