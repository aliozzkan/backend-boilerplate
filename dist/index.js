"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // this shim is required
var express_1 = __importDefault(require("express"));
var routing_controllers_1 = require("routing-controllers");
var controllers_1 = require("./controllers");
var authorization_1 = require("./middlewares/authorization");
var error_handlers_1 = require("./middlewares/error-handlers");
require("./db/configuration");
// creates express app, registers all controller routes and returns you express app instance
var app = routing_controllers_1.createExpressServer({
    cors: true,
    controllers: controllers_1.Controllers,
    middlewares: [error_handlers_1.CustomErrorHandler],
    authorizationChecker: authorization_1.Options.authorizationChecker,
    currentUserChecker: authorization_1.Options.currentUserChecker,
    defaultErrorHandler: false,
});
app.use("/uploads", express_1.default.static("uploads"));
// run express application on port 3000
app.listen(3000);
//# sourceMappingURL=index.js.map