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
Object.defineProperty(exports, "__esModule", { value: true });
exports.End = exports.Response = exports.AbstractRes = exports.AbstractResponse = exports.Status = exports.Endpoint = void 0;
var routing_controllers_1 = require("routing-controllers");
function Endpoint() {
    return routing_controllers_1.createParamDecorator({
        required: false,
        value: function (action) {
            return function (data, status) {
                action.response.json(data).status(status);
            };
        },
    });
}
exports.Endpoint = Endpoint;
var Status;
(function (Status) {
    Status[Status["success"] = 200] = "success";
    Status[Status["error"] = 400] = "error";
    Status[Status["forbidden"] = 403] = "forbidden";
})(Status = exports.Status || (exports.Status = {}));
var AbstractResponse = /** @class */ (function () {
    function AbstractResponse() {
    }
    AbstractResponse.prototype.json = function () {
        return __assign({}, this);
    };
    return AbstractResponse;
}());
exports.AbstractResponse = AbstractResponse;
var AbstractRes = /** @class */ (function () {
    function AbstractRes() {
    }
    return AbstractRes;
}());
exports.AbstractRes = AbstractRes;
var Response = /** @class */ (function () {
    function Response(status, data, message) {
        this.data = null;
        this.message = null;
        this.status = status;
        if (data) {
            this.data = data;
        }
        if (message) {
            this.message = message;
        }
    }
    Response.prototype.json = function () {
        return {
            data: this.data,
            message: this.message,
            success: this.status === Status.success ? true : false,
        };
    };
    Response.prototype.getStatus = function () {
        return this.status;
    };
    return Response;
}());
exports.Response = Response;
function createResponse(action) {
    return function (status, data, message) {
        action.response
            .json({ data: data !== null && data !== void 0 ? data : null, message: message !== null && message !== void 0 ? message : null })
            .status(status);
    };
}
function End() {
    return routing_controllers_1.createParamDecorator({
        required: false,
        value: createResponse,
    });
}
exports.End = End;
//# sourceMappingURL=res-creater.js.map