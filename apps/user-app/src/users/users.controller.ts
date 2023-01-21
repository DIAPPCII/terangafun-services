import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Paginate, PaginateQuery } from "nestjs-paginate";
import { TargetDto } from "./dto/target.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  @Get()
  findAll(@Paginate() query: PaginateQuery) {
    return this.usersService.findAll(query);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(id);
  }

  @Post(":id/friends")
  requestFriendShip(@Body(new ValidationPipe()) targetDto: TargetDto) {
    return "To DO";
  }

  @Get(":id/friends")
  findUserFriends(@Param("id") id: string) {
    return "To DO";
  }

  @Delete(":id/friends/:targetId")
  deleteFriendShip(@Param("id") id: string, @Param("targetId") targetId: string) {
    return "To DO";
  }

  @Get(":id/followers")
  findUserFollowers(@Param("id") id: string) {
    return "To DO";
  }

  @Post(":id/following")
  followUser(@Param("id") id: string, @Body(new ValidationPipe()) targetDto: TargetDto) {
    return this.usersService.followUser(id, targetDto.targetId);
  }

  @Get(":id/following")
  findUserFollowing(@Param("id") id: string) {
    return "To DO";
  }

  @Delete(":id/following/:targetId")
  unFollowUser(@Param("id") id: string, @Param("targetId") targetId: string) {
    return "To DO";
  }

  @Post(":id/interests")
  addUserInterest(@Param("id") id: string, @Body(new ValidationPipe()) targetDto: TargetDto) {
    return this.usersService.addInterest(id, targetDto);
  }

  @Get(":id/interests")
  findUserInterests(@Param("id") id: string) {
    return this.usersService.getInterests(id);
  }

  @Delete(":id/interests/:targetId")
  @HttpCode(204)
  deleteUserInterest(@Param("id") id: string, @Param("targetId") targetId: string) {
    this.usersService.deleteUserInterest(id, targetId);
  }
  @Get(":id/medias")
  findUserMedias(@Param("id") id: string) {
    return "To DO";
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(":id")
  @HttpCode(204)
  remove(@Param("id") id: string) {
    return this.usersService.remove(id);
  }
}
