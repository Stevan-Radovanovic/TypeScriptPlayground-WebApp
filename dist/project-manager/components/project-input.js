"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_log_js_1 = __importDefault(require("../helpers/console-log.js"));
const helper_js_1 = require("../helpers/helper.js");
const project_state_js_1 = require("../global/project-state.js");
class ProjectInput {
    constructor() {
        console_log_js_1.default.consoleLogInitialization(this.constructor.name);
        this.content = document.getElementById("project-input");
        this.renderContentHere = document.getElementById("app");
        const importedContent = document.importNode(this.content.content, true);
        const element = importedContent.firstElementChild;
        element.id = "user-input";
        this.projectTitle = element.querySelector("#title");
        this.projectDescription = element.querySelector("#description");
        this.projectPeople = element.querySelector("#people");
        this.renderContentHere.addEventListener("submit", this.submitHandler.bind(this));
        this.renderContentHere.insertAdjacentElement("afterbegin", element);
    }
    submitHandler() {
        event === null || event === void 0 ? void 0 : event.preventDefault();
        const userInput = this.gatherInput();
        if (userInput) {
            project_state_js_1.State.addProject(userInput[0], userInput[1], userInput[2]);
            alert("Project added");
            this.clearInputs();
        }
        else {
            alert("It ain't right");
        }
    }
    clearInputs() {
        this.projectDescription.value = "";
        this.projectTitle.value = "";
        this.projectPeople.value = "";
    }
    gatherInput() {
        var _a, _b, _c;
        const title = (_a = this.projectTitle) === null || _a === void 0 ? void 0 : _a.value;
        const desc = (_b = this.projectDescription) === null || _b === void 0 ? void 0 : _b.value;
        const people = +((_c = this.projectPeople) === null || _c === void 0 ? void 0 : _c.value);
        if (!helper_js_1.Helper.validatePrimitive(title, { minLength: 4 }) ||
            !helper_js_1.Helper.validatePrimitive(desc, { minLength: 5 }) ||
            !helper_js_1.Helper.validatePrimitive(people, { min: 0 }))
            return;
        return [title, desc, people];
    }
}
exports.default = ProjectInput;
