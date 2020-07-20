import ConsoleLog from "./console-log.js";
export class Helper {
    static validatePrimitive(value, configuration) {
        ConsoleLog.consoleLogValidation(value.toString());
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
