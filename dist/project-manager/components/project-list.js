import ConsoleLog from "../helpers/console-log.js";
import { State } from "../global/project-state.js";
import ProjectItem from "./project-item.js";
export default class ProjectList {
    constructor(type) {
        this.type = type;
        this.assignedProjects = [];
        ConsoleLog.consoleLogInitialization(this.constructor.name);
        this.content = document.getElementById("project-list");
        this.renderContentHere = document.getElementById("app");
        State.addListener((projects) => {
            this.assignedProjects = projects.filter((project) => {
                if (type === "active") {
                    return project.status === "active";
                }
                return project.status === "finished";
            });
            let list = document.getElementById(`${this.type}-projects-list`);
            list.innerHTML = "";
            for (const project of this.assignedProjects) {
                new ProjectItem(this.element.querySelector("ul").id, project);
            }
        });
        const importedContent = document.importNode(this.content.content, true);
        this.element = importedContent.firstElementChild;
        this.element.id = `${this.type}-projects`;
        this.element.querySelector("ul").id = `${this.type}-projects-list`;
        this.element.querySelector("h2").textContent =
            this.type[0].toUpperCase() + this.type.slice(1) + " projects";
        this.renderContentHere.insertAdjacentElement("beforeend", this.element);
    }
}
