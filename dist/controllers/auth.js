"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
var routing_controllers_1 = require("routing-controllers");
var res_creater_1 = require("../middlewares/res-creater");
var routing_controllers_openapi_1 = require("routing-controllers-openapi");
var class_validator_1 = require("class-validator");
var User_1 = require("../db/entity/User");
var LoginRequest = /** @class */ (function () {
    function LoginRequest() {
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], LoginRequest.prototype, "email", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], LoginRequest.prototype, "password", void 0);
    return LoginRequest;
}());
var LoginResponse = /** @class */ (function (_super) {
    __extends(LoginResponse, _super);
    function LoginResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], LoginResponse.prototype, "msg", void 0);
    return LoginResponse;
}(res_creater_1.AbstractResponse));
var RegisterResponse = /** @class */ (function (_super) {
    __extends(RegisterResponse, _super);
    function RegisterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], RegisterResponse.prototype, "message", void 0);
    return RegisterResponse;
}(res_creater_1.AbstractResponse));
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    // User Register
    AuthController.prototype.register = function (user, Endpoint) {
        return __awaiter(this, void 0, void 0, function () {
            var registerResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user.save()];
                    case 1:
                        _a.sent();
                        registerResponse = new RegisterResponse();
                        registerResponse.message = "Success";
                        return [2 /*return*/, Endpoint(registerResponse.json(), res_creater_1.Status.success)];
                }
            });
        });
    };
    // User Login
    AuthController.prototype.login = function (Body, Endpoint) {
        var loginResponse = new LoginResponse();
        loginResponse.msg = "VVW";
        return Endpoint(loginResponse.json(), res_creater_1.Status.success);
    };
    __decorate([
        routing_controllers_1.Post("/register"),
        routing_controllers_openapi_1.ResponseSchema(RegisterResponse),
        __param(0, routing_controllers_1.Body()), __param(1, res_creater_1.Endpoint()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [User_1.User, Function]),
        __metadata("design:returntype", Promise)
    ], AuthController.prototype, "register", null);
    __decorate([
        routing_controllers_1.Post("/login"),
        routing_controllers_openapi_1.ResponseSchema(LoginResponse),
        __param(0, routing_controllers_1.Body()), __param(1, res_creater_1.Endpoint()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [LoginRequest, Function]),
        __metadata("design:returntype", void 0)
    ], AuthController.prototype, "login", null);
    AuthController = __decorate([
        routing_controllers_1.JsonController("/auth")
    ], AuthController);
    return AuthController;
}());
exports.AuthController = AuthController;
//# sourceMappingURL=auth.js.map