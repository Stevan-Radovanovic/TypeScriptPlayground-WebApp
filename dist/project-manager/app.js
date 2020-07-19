"use strict";
const consoleLogString = "color: pink; background-color: black; font-weight: bold";
console.log("%c Project Manager", consoleLogString);
class ProjectInput {
    constructor() {
        console.log("%c Initializing Project Form", consoleLogString);
        this.content = document.getElementById("project-input");
        this.renderContentHere = document.getElementById("app");
        const importedContent = document.importNode(this.content.content, true);
        this.renderContentHere.id = "user-input";
        console.log("%c Binding Form Properties", consoleLogString);
        this.projectTitle = this.renderContentHere.querySelector("#title");
        this.projectDescription = this.renderContentHere.querySelector("#description");
        this.projectPeople = this.renderContentHere.querySelector("#people");
        this.renderContentHere.addEventListener("submit", this.submitHandler.bind(this));
        this.renderContentHere.insertAdjacentElement("afterbegin", importedContent.firstElementChild);
    }
    submitHandler() {
        console.log("%c Validating form", consoleLogString);
        event === null || event === void 0 ? void 0 : event.preventDefault();
        this.gatherInput();
    }
    gatherInput() {
        console.log("%c Gathering Input", consoleLogString);
    }
}
const projectInput = new ProjectInput();
