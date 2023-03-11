import { Body, Controller, Delete, Param, Patch } from "@nestjs/common";
import { FollowshipService } from "./followship.service";
import { UpdateFollowshipDto } from "./dto/update-followship.dto";

@Controller("followship")
export class FollowshipController {
  constructor(private readonly followshipService: FollowshipService) {}

  /*@Post()
  create(@Body() createFollowshipDto: CreateFollowshipDto) {
    return this.followshipService.create(createFollowshipDto);
  }

  @Get()
  findAll() {
    return this.followshipService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.followshipService.findOne(+id);
  }*/

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateFollowshipDto: UpdateFollowshipDto) {
    return this.followshipService.update(+id, updateFollowshipDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.followshipService.remove(+id);
  }
}
