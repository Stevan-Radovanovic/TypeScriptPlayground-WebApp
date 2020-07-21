import ConsoleLog from "../helpers/console-log.js";
export default class ProjectItem {
    constructor(hostID, project) {
        this.hostID = hostID;
        this.project = project;
        ConsoleLog.consoleLogInitialization(this.constructor.name);
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
        ConsoleLog.consoleLogEvent(event.type);
        event.dataTransfer.setData("text/plain", this.project.id);
        event.dataTransfer.effectAllowed = "move";
    }
    dragEnd(event) {
        ConsoleLog.consoleLogEvent(event.type);
    }
}
