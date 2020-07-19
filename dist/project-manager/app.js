"use strict";
const consoleLogString = "color: pink; background-color: black; font-weight: bold";
console.log("%c Project Manager", consoleLogString);
class ProjectInput {
    constructor() {
        console.log("%c Initializing Project Form", consoleLogString);
        this.content = document.getElementById("project-input");
        this.renderContentHere = document.getElementById("app");
        const importedContent = document.importNode(this.content.content, true);
        const element = importedContent.firstElementChild;
        element.id = "user-input";
        console.log("%c Binding Form Properties", consoleLogString);
        this.projectTitle = element.querySelector("#title");
        this.projectDescription = element.querySelector("#description");
        this.projectPeople = element.querySelector("#people");
        this.renderContentHere.addEventListener("submit", this.submitHandler.bind(this));
        this.renderContentHere.insertAdjacentElement("afterbegin", element);
    }
    submitHandler() {
        console.log("%c Validating form", consoleLogString);
        event === null || event === void 0 ? void 0 : event.preventDefault();
        const userInput = this.gatherInput();
        if (userInput) {
            alert("Project added");
            this.clearInputs();
        }
        else {
            alert("It ain't right");
        }
    }
    clearInputs() {
        console.log("%c Reseting form", consoleLogString);
        this.projectDescription.value = "";
        this.projectTitle.value = "";
        this.projectPeople.value = "";
    }
    gatherInput() {
        var _a, _b, _c;
        console.log("%c Gathering Input", consoleLogString);
        const title = (_a = this.projectTitle) === null || _a === void 0 ? void 0 : _a.value;
        const desc = (_b = this.projectDescription) === null || _b === void 0 ? void 0 : _b.value;
        const people = +((_c = this.projectPeople) === null || _c === void 0 ? void 0 : _c.value);
        if (!Helper.validatePrimitive(title, { minLength: 4 }) ||
            !Helper.validatePrimitive(desc, { minLength: 5 }) ||
            !Helper.validatePrimitive(people, { min: 0 }))
            return;
        return [title, desc, people];
    }
}
class Helper {
    static validatePrimitive(value, configuration) {
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
const projectInput = new ProjectInput();
