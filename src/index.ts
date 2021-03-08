import "reflect-metadata"; // this shim is required
import express from "express";
import { createExpressServer } from "routing-controllers";

import { Controllers } from "./controllers";
import { Options } from "./middlewares/authorization";
import { CustomErrorHandler } from "./middlewares/error-handlers";

import "./db/configuration";

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
  cors: true,
  controllers: Controllers,
  middlewares: [CustomErrorHandler],
  authorizationChecker: Options.authorizationChecker,
  currentUserChecker: Options.currentUserChecker,
  defaultErrorHandler: false,
});

app.use("/uploads", express.static("uploads"));

// run express application on port 3000
app.listen(3000);
