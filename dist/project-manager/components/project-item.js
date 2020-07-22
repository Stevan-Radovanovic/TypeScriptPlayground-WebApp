"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_log_js_1 = __importDefault(require("../helpers/console-log.js"));
class ProjectItem {
    constructor(hostID, project) {
        this.hostID = hostID;
        this.project = project;
        console_log_js_1.default.consoleLogInitialization(this.constructor.name);
        this.content = document.getElementById("single-project");
        this.renderContentHere = document.getElementById(hostID);
        const importedContent = document.importNode(this.content.content, true);
        this.element = importedContent.firstElementChild;
        this.element.id = this.project.id;
        this.element.querySelector("h2").textContent = this.project.title;
        this.element.querySelector("h3").textContent =
            "Number of people assigned: " + this.project.people.toString();
        this.element.querySelector("p").textContent = this.project.description;
        this.attachListeners();
        this.renderContentHere.insertAdjacentElement("beforeend", this.element);
    }
    attachListeners() {
        this.element.addEventListener("dragstart", this.dragStart.bind(this));
        this.element.addEventListener("dragend", this.dragEnd.bind(this));
    }
    dragStart(event) {
        console_log_js_1.default.consoleLogEvent(event.type);
        event.dataTransfer.setData("text/plain", this.project.id);
        event.dataTransfer.effectAllowed = "move";
    }
    dragEnd(event) {
        console_log_js_1.default.consoleLogEvent(event.type);
    }
}
exports.default = ProjectItem;
