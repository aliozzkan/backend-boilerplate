"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomErrorHandler = void 0;
var routing_controllers_1 = require("routing-controllers");
var CustomErrorHandler = /** @class */ (function () {
    function CustomErrorHandler() {
    }
    CustomErrorHandler.prototype.error = function (error, request, response, next) {
        console.log("do something...");
        console.log({ error: error });
        return response.json(__assign({}, error));
    };
    CustomErrorHandler = __decorate([
        routing_controllers_1.Middleware({ type: "after" })
    ], CustomErrorHandler);
    return CustomErrorHandler;
}());
exports.CustomErrorHandler = CustomErrorHandler;
//# sourceMappingURL=error-handlers.js.map