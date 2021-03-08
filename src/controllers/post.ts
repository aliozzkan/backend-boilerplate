import {
  JsonController,
  Get,
  Post,
  Req,
  Res,
  Authorized,
  CurrentUser,
  Body,
  getMetadataArgsStorage,
  QueryParams,
} from "routing-controllers";
import { Status, End, Response, AbstractRes } from "../middlewares/res-creater";
import { IsNotEmpty, IsString } from "class-validator";

import { ResponseSchema } from "routing-controllers-openapi";

class ResponseGetPosts extends AbstractRes {
  @IsNotEmpty() data?: { message: string };
}

class Queries {
  @IsString()
  name?: string;
}

@JsonController("/post")
export class PostController {
  @Get("/")
  @ResponseSchema(ResponseGetPosts)
  async getPosts(@QueryParams() queries: Queries, @End() endpoint: End) {
    endpoint(Status.success, { message: "Hi" });
  }
}
