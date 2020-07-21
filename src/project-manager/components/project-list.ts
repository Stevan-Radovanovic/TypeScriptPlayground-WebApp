import ConsoleLog from "../helpers/console-log.js";
import Project from "../models/project-model.js";
import { State } from "../global/project-state.js";
import ProjectItem from "./project-item.js";
import { DragTarget } from "../helpers/drag-drop.js";

export default class ProjectList implements DragTarget {
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

    this.addListeners();

    this.renderContentHere.insertAdjacentElement("beforeend", this.element);
  }

  private addListeners() {
    this.element.addEventListener("dragover", this.dragOver.bind(this));
    this.element.addEventListener("dragleave", this.dragLeave.bind(this));
    this.element.addEventListener("drop", this.drop.bind(this));
  }

  dragOver(event: DragEvent): void {
    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      event.preventDefault();
      ConsoleLog.consoleLogEvent(event.type);
      this.element.querySelector("ul")!.classList.add("droppable");
    }
  }

  dragLeave(event: DragEvent): void {
    ConsoleLog.consoleLogEvent(event.type);
    this.element.querySelector("ul")!.classList.remove("droppable");
  }

  drop(event: DragEvent): void {
    ConsoleLog.consoleLogEvent(event.type);
  }
}
