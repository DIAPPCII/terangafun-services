import { Injectable } from "@nestjs/common";
import { CreateCognitoInput } from "./dto/create-cognito.input";
import { UpdateCognitoInput } from "./dto/update-cognito.input";

@Injectable()
export class CognitoService {
  create(createCognitoInput: CreateCognitoInput) {
    return "This action adds a new cognito";
  }

  findAll() {
    return `This action returns all cognito`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cognito`;
  }

  update(id: number, updateCognitoInput: UpdateCognitoInput) {
    return `This action updates a #${id} cognito`;
  }

  remove(id: number) {
    return `This action removes a #${id} cognito`;
  }
}
