import ConsoleLog from "../helpers/console-log.js";
export default class ProjectItem {
    constructor(hostID, project) {
        this.hostID = hostID;
        this.project = project;
        ConsoleLog.consoleLogInitialization(this.constructor.name);
        this.content = document.getElementById("single-project");
        this.renderContentHere = document.getElementById("app");
        const importedContent = document.importNode(this.content.content, true);
        this.element = importedContent.firstElementChild;
        console.log(this.element);
        this.element.id = this.project.id;
        this.element.querySelector("h2").textContent = this.project.title;
        this.element.querySelector("h3").textContent = this.project.people.toString();
        this.element.querySelector("p").textContent = this.project.description;
        this.renderContentHere.insertAdjacentElement("beforeend", this.element);
    }
}
