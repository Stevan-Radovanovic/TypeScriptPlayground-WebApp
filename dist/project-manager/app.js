"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const project_input_js_1 = __importDefault(require("./components/project-input.js"));
const project_list_js_1 = __importDefault(require("./components/project-list.js"));
new project_input_js_1.default();
new project_list_js_1.default("active");
new project_list_js_1.default("finished");
