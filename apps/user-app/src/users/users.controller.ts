import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
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

  @Delete(":id/friends/:targetUserId")
  deleteFriendShip(@Param("id") id: string, @Param("targetUserId") targetUserId: string) {
    return "To DO";
  }

  @Get(":id/followers")
  findUserFollowers(@Param("id") id: string) {
    return "To DO";
  }

  @Post(":id/following")
  followUser(@Body(new ValidationPipe()) targetDto: TargetDto) {
    return "To DO";
  }

  @Get(":id/following")
  findUserFollowing(@Param("id") id: string) {
    return "To DO";
  }

  @Delete(":id/following/:targetUserId")
  unFollowUser(@Param("id") id: string, @Param("targetUserId") targetUserId: string) {
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

  @Get(":id/medias")
  findUserMedias(@Param("id") id: string) {
    return "To DO";
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(id);
  }
}
