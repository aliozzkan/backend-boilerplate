import {
  Middleware,
  ExpressMiddlewareInterface,
  createParamDecorator,
} from "routing-controllers";
import { Request, Response, NextFunction } from "express";

@Middleware({ type: "before" })
export class Session implements ExpressMiddlewareInterface {
  async use(request: Request, response: Response, next: NextFunction) {
    return next();
  }
}

export function Ali() {
  return createParamDecorator({
    required: false,
    value: (action) => {
      console.log((action.request.headers));
      return "Selam";
    },
  });
}
