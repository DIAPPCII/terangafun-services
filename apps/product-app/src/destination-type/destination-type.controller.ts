import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { DestinationTypeService } from "./destination-type.service";
import { CreateDestinationTypeDto } from "./dto/create-destination-type.dto";
import { UpdateDestinationTypeDto } from "./dto/update-destination-type.dto";
import { Paginate, PaginateQuery } from "nestjs-paginate";

@Controller("destination-type")
export class DestinationTypeController {
  constructor(private readonly destinationTypeService: DestinationTypeService) {}

  @Post()
  create(@Body(new ValidationPipe()) createDestinationTypeDto: CreateDestinationTypeDto) {
    return this.destinationTypeService.create(createDestinationTypeDto);
  }

  @Get()
  findAll(@Paginate() query: PaginateQuery) {
    return this.destinationTypeService.findAll(query);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.destinationTypeService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateDestinationTypeDto: UpdateDestinationTypeDto) {
    return this.destinationTypeService.update(id, updateDestinationTypeDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.destinationTypeService.remove(id);
  }
}
