import { consoleLogString } from "./console-log.js";
import { State } from "./project-state.js";
export default class ProjectList {
    constructor(type) {
        this.type = type;
        this.assignedProjects = [];
        console.log("%c Initializing Project List", consoleLogString);
        this.content = document.getElementById("project-list");
        this.renderContentHere = document.getElementById("app");
        State.addListener((projects) => {
            this.assignedProjects = projects;
            const list = document.getElementById(`${this.type}-projects-list`);
            for (const project of this.assignedProjects) {
                const item = document.createElement("li");
                item.textContent = project.title;
                list.appendChild(item);
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
