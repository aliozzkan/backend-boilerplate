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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocController = void 0;
var routing_controllers_1 = require("routing-controllers");
var routing_controllers_openapi_1 = require("routing-controllers-openapi");
var class_validator_jsonschema_1 = require("class-validator-jsonschema");
var DocController = /** @class */ (function () {
    function DocController() {
    }
    DocController.prototype.openApiSchema = function (res) {
        var schemas = class_validator_jsonschema_1.validationMetadatasToSchemas({
            refPointerPrefix: "#/components/schemas/",
        });
        var storage = routing_controllers_1.getMetadataArgsStorage();
        var spec = routing_controllers_openapi_1.routingControllersToSpec(storage, {}, {
            components: { schemas: schemas },
            info: { title: "Ali Backend", version: "1.2.0" },
        });
        return res.send(spec);
    };
    __decorate([
        routing_controllers_1.Get("/"),
        __param(0, routing_controllers_1.Res()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DocController.prototype, "openApiSchema", null);
    DocController = __decorate([
        routing_controllers_1.JsonController("/doc")
    ], DocController);
    return DocController;
}());
exports.DocController = DocController;
//# sourceMappingURL=doc.js.map