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
} from "routing-controllers";
import { Endpoint, Status, AbstractResponse } from "../middlewares/res-creater";
import {
  routingControllersToSpec,
  ResponseSchema,
} from "routing-controllers-openapi";
import { IsString, IsNotEmpty } from "class-validator";
import { User } from "../db/entity/User";

class LoginRequest {
  @IsNotEmpty() email!: string;
  @IsNotEmpty() password!: string;
}
class LoginResponse extends AbstractResponse {
  @IsString() @IsNotEmpty() msg?: string;
}

class RegisterResponse extends AbstractResponse {
  @IsString() message?: string;
}

@JsonController("/auth")
export class AuthController {
  // User Register
  @Post("/register")
  @ResponseSchema(RegisterResponse)
  async register(@Body() user: User, @Endpoint() Endpoint: Endpoint) {
    await user.save();
    const registerResponse = new RegisterResponse();
    registerResponse.message = "Success";
    return Endpoint(registerResponse.json(), Status.success);
  }

  // User Login
  @Post("/login")
  @ResponseSchema(LoginResponse)
  login(@Body() Body: LoginRequest, @Endpoint() Endpoint: Endpoint) {
    const loginResponse = new LoginResponse();
    loginResponse.msg = "VVW";
    return Endpoint(loginResponse.json(), Status.success);
  }
}
