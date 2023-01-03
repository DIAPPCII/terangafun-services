import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from "@nestjs/common";
import { InterestService } from "./interest.service";
import { CreateInterestDto } from "./dto/create-interest.dto";
import { UpdateInterestDto } from "./dto/update-interest.dto";
import { Paginate, PaginateQuery } from "nestjs-paginate";

@Controller("interest")
export class InterestController {
  constructor(private readonly interestService: InterestService) {}

  @Post()
  create(@Body(new ValidationPipe()) createInterestDto: CreateInterestDto) {
    return this.interestService.create(createInterestDto);
  }

  @Get()
  findAll(@Paginate() query: PaginateQuery) {
    return this.interestService.findAll(query);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.interestService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateInterestDto: UpdateInterestDto) {
    return this.interestService.update(+id, updateInterestDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.interestService.remove(+id);
  }
}
