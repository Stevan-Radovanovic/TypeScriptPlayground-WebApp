"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
const console_log_js_1 = __importDefault(require("./console-log.js"));
class Helper {
    static validatePrimitive(value, configuration) {
        console_log_js_1.default.consoleLogValidation(value.toString());
        if (typeof value === "string") {
            if (value === null || value === undefined || value.trim().length === 0)
                return false;
            if (configuration.contains && !value.includes(configuration.contains)) {
                return false;
            }
            if (configuration.minLength &&
                value.trim().length < configuration.minLength) {
                return false;
            }
            if (configuration.maxLength &&
                value.trim().length > configuration.maxLength) {
                return false;
            }
        }
        if (typeof value === "number") {
            if (value === null || value === undefined || value === 0)
                return false;
            if (configuration.max !== undefined && value > configuration.max) {
                return false;
            }
            if (configuration.min !== undefined && value < configuration.min) {
                return false;
            }
        }
        return true;
    }
}
exports.Helper = Helper;
