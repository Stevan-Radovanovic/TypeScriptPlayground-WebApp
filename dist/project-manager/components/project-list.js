"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_log_js_1 = __importDefault(require("../helpers/console-log.js"));
const project_state_js_1 = require("../global/project-state.js");
const project_item_js_1 = __importDefault(require("./project-item.js"));
class ProjectList {
    constructor(type) {
        this.type = type;
        this.assignedProjects = [];
        console_log_js_1.default.consoleLogInitialization(this.constructor.name);
        this.content = document.getElementById("project-list");
        this.renderContentHere = document.getElementById("app");
        project_state_js_1.State.addListener((projects) => {
            this.assignedProjects = projects.filter((project) => {
                if (type === "active") {
                    return project.status === "active";
                }
                return project.status === "finished";
            });
            let list = document.getElementById(`${this.type}-projects-list`);
            list.innerHTML = "";
            for (const project of this.assignedProjects) {
                new project_item_js_1.default(this.element.querySelector("ul").id, project);
            }
        });
        const importedContent = document.importNode(this.content.content, true);
        this.element = importedContent.firstElementChild;
        this.element.id = `${this.type}-projects`;
        this.element.querySelector("ul").id = `${this.type}-projects-list`;
        this.element.querySelector("h2").textContent =
            this.type[0].toUpperCase() + this.type.slice(1) + " projects";
        this.addListeners();
        this.renderContentHere.insertAdjacentElement("beforeend", this.element);
    }
    addListeners() {
        this.element.addEventListener("dragover", this.dragOver.bind(this));
        this.element.addEventListener("dragleave", this.dragLeave.bind(this));
        this.element.addEventListener("drop", this.drop.bind(this));
    }
    dragOver(event) {
        if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
            event.preventDefault();
            console_log_js_1.default.consoleLogEvent(event.type);
            this.element.querySelector("ul").classList.add("droppable");
        }
    }
    dragLeave(event) {
        console_log_js_1.default.consoleLogEvent(event.type);
        this.element.querySelector("ul").classList.remove("droppable");
    }
    drop(event) {
        console_log_js_1.default.consoleLogEvent(event.type);
        const id = event.dataTransfer.getData("text/plain");
        project_state_js_1.State.moveProject(id, this.type);
    }
}
exports.default = ProjectList;
