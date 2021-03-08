import {
  Middleware,
  ExpressErrorMiddlewareInterface,
  HttpError,
} from "routing-controllers";
import { Response } from "express";

@Middleware({ type: "after" })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
  error(
    error: HttpError,
    request: any,
    response: Response,
    next: (err?: any) => any
  ) {
    console.log("do something...");
    console.log({ error });
    return response.json({ ...error });
  }
}
