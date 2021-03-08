"use strict";
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
exports.Deneme = void 0;
var routing_controllers_1 = require("routing-controllers");
var auth_1 = require("../middlewares/auth");
var User_1 = require("../db/entity/User");
var Blog_1 = require("../db/entity/Blog");
var fileOptions_1 = require("../helpers/fileOptions");
var roles_1 = require("../configs/roles");
var class_validator_1 = require("class-validator");
var Deneme = /** @class */ (function () {
    function Deneme() {
    }
    Deneme.prototype.firstDeneme = function (Ali, res) {
        console.log(Ali);
        return res.json({ message: "Hi" }).status(200);
    };
    Deneme.prototype.createUser = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var user, blog, blogList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = new User_1.User();
                        user.firstname = "Ali";
                        user.lastname = "Özkan";
                        user.email = "aliozzkan@gmail.com";
                        return [4 /*yield*/, user.save()];
                    case 1:
                        _a.sent();
                        blog = new Blog_1.Blog();
                        blog.title = "Blog Title";
                        blog.content = "Blog Content";
                        blog.user = user;
                        return [4 /*yield*/, blog.save()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, Blog_1.Blog.find({ relations: ["user"] })];
                    case 3:
                        blogList = _a.sent();
                        return [2 /*return*/, response.json({ BlogList: blogList }).status(200)];
                }
            });
        });
    };
    Deneme.prototype.getUserList = function (user, response) {
        return __awaiter(this, void 0, void 0, function () {
            var blogList, userList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Blog_1.Blog.find({ relations: ["user"] })];
                    case 1:
                        blogList = _a.sent();
                        return [4 /*yield*/, User_1.User.find({ relations: ["blogs"] })];
                    case 2:
                        userList = _a.sent();
                        return [2 /*return*/, response
                                .json({ User: user, BlogList: blogList, UserList: userList })
                                .status(200)];
                }
            });
        });
    };
    Deneme.prototype.getFile = function (file, response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(file);
                return [2 /*return*/, response
                        .json({ file: "http://localhost:3000/uploads/images/" + file.filename })
                        .status(200)];
            });
        });
    };
    Deneme.prototype.addUser = function (body, res) {
        return __awaiter(this, void 0, void 0, function () {
            var errors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, class_validator_1.validate(body)];
                    case 1:
                        errors = _a.sent();
                        if (!(errors.length > 0)) return [3 /*break*/, 2];
                        return [2 /*return*/, res.json({ errors: errors }).status(400)];
                    case 2: return [4 /*yield*/, body.save()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, res.json({ body: body }).status(200)];
                }
            });
        });
    };
    __decorate([
        routing_controllers_1.Get("/"),
        __param(0, auth_1.Ali()), __param(1, routing_controllers_1.Res()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", void 0)
    ], Deneme.prototype, "firstDeneme", null);
    __decorate([
        routing_controllers_1.Get("/deneme"),
        __param(0, routing_controllers_1.Res()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Deneme.prototype, "createUser", null);
    __decorate([
        routing_controllers_1.Authorized(roles_1.Roles.ADMIN),
        routing_controllers_1.Get("/blog-list"),
        __param(0, routing_controllers_1.CurrentUser()),
        __param(1, routing_controllers_1.Res()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], Deneme.prototype, "getUserList", null);
    __decorate([
        routing_controllers_1.Post("/file"),
        __param(0, routing_controllers_1.UploadedFile("fileName", { options: fileOptions_1.fileUploadOptions("images") })),
        __param(1, routing_controllers_1.Res()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], Deneme.prototype, "getFile", null);
    __decorate([
        routing_controllers_1.Post("/user"),
        __param(0, routing_controllers_1.Body()), __param(1, routing_controllers_1.Res()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [User_1.User, Object]),
        __metadata("design:returntype", Promise)
    ], Deneme.prototype, "addUser", null);
    Deneme = __decorate([
        routing_controllers_1.JsonController()
    ], Deneme);
    return Deneme;
}());
exports.Deneme = Deneme;
//# sourceMappingURL=deneme.js.map