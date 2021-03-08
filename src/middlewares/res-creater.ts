import {
  Middleware,
  ExpressMiddlewareInterface,
  createParamDecorator,
  CustomParameterDecorator,
  Action,
} from "routing-controllers";

export type Endpoint = (data: object, status: Status) => void;

export function Endpoint() {
  return createParamDecorator({
    required: false,
    value: (action) => {
      return (data: object, status: Status) => {
        action.response.json(data).status(status);
      };
    },
  });
}

export enum Status {
  success = 200,
  error = 400,
  forbidden = 403,
}

export abstract class AbstractResponse {
  public json() {
    return {
      ...this,
    };
  }
}

export abstract class AbstractRes {
  public status?: Status;
  public message?: string | null;
  public data?: any;
}

export class Response {
  private status: Status;
  private data: any = null;
  private message: string | null = null;

  public json() {
    return {
      data: this.data,
      message: this.message,
      success: this.status === Status.success ? true : false,
    };
  }

  public getStatus() {
    return this.status;
  }

  constructor(status: Status, data?: any, message?: string | null) {
    this.status = status;
    if (data) {
      this.data = data;
    }
    if (message) {
      this.message = message;
    }
  }
}

function createResponse(action: Action) {
  return function (status: Status, data?: any, message?: string) {
    action.response
      .json({ data: data ?? null, message: message ?? null })
      .status(status);
  };
}

export type End = (status: Status, data?: any, message?: string) => void;
export function End() {
  return createParamDecorator({
    required: false,
    value: createResponse,
  });
}
