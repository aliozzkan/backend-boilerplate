"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUploadOptions = void 0;
var multer_1 = __importDefault(require("multer"));
var fileUploadOptions = function (folderName) {
    if (folderName === void 0) { folderName = ""; }
    return ({
        storage: multer_1.default.diskStorage({
            destination: function (req, file, cb) {
                cb(null, "./uploads/" + (folderName ? folderName + "/" : ""));
            },
            filename: function (req, file, cb) {
                cb(null, new Date().toISOString() + file.originalname);
            },
        }),
        fileFilter: function (req, file, cb) {
            if (file.mimetype === "image/jpeg" ||
                file.mimetype === "image/png" ||
                file.mimetype === "image/webp") {
                cb(null, true);
            }
            else {
                cb(new Error("File must be valid!"), false);
            }
        },
        limits: {
            fieldNameSize: 255,
            fileSize: 1024 * 1024 * 5,
        },
    });
};
exports.fileUploadOptions = fileUploadOptions;
//# sourceMappingURL=fileOptions.js.map