import ConsoleLog from "../helpers/console-log.js";
import Project from "../models/project-model.js";
import { State } from "../global/project-state.js";
import ProjectItem from "./project-item.js";

export default class ProjectList {
  content: HTMLTemplateElement;
  renderContentHere: HTMLDivElement;
  element: HTMLElement;
  assignedProjects: Project[] = [];

  constructor(private type: "active" | "finished") {
    ConsoleLog.consoleLogInitialization(this.constructor.name);
    this.content = document.getElementById(
      "project-list"
    )! as HTMLTemplateElement;
    this.renderContentHere = document.getElementById("app")! as HTMLDivElement;

    State.addListener((projects: Project[]) => {
      this.assignedProjects = projects.filter((project) => {
        if (type === "active") {
          return project.status === "active";
        }
        return project.status === "finished";
      });
      let list = document.getElementById(
        `${this.type}-projects-list`
      )! as HTMLUListElement;
      list.innerHTML = "";
      for (const project of this.assignedProjects) {
        new ProjectItem(this.element.querySelector("ul")!.id, project);
      }
    });

    const importedContent = document.importNode(this.content.content, true);
    this.element = importedContent.firstElementChild as HTMLElement;
    this.element.id = `${this.type}-projects`;

    this.element.querySelector("ul")!.id = `${this.type}-projects-list`;
    this.element.querySelector("h2")!.textContent =
      this.type[0].toUpperCase() + this.type.slice(1) + " projects";

    this.renderContentHere.insertAdjacentElement("beforeend", this.element);
  }
}
