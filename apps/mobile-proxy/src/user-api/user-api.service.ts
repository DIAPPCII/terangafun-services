import { Injectable } from "@nestjs/common";
import { RESTDataSource } from "@apollo/datasource-rest";

@Injectable()
export class UserApiService extends RESTDataSource {
  baseURL = "http://localhost:3000";

  /**
   * *******************************************************
   * User libs
   */
  async findUserById(id: string) {
    return await this.get(`users/${id}`).catch(err => {
      console.log(err);
    });
  }
}
