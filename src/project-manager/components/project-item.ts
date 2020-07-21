import ConsoleLog from "../helpers/console-log.js";
import Project from "../models/project-model.js";
import { Draggable } from "../helpers/drag-drop.js";

export default class ProjectItem implements Draggable {
  content: HTMLTemplateElement;
  renderContentHere: HTMLDivElement;
  element: HTMLLIElement;

  constructor(public hostID: string, public project: Project) {
    ConsoleLog.consoleLogInitialization(this.constructor.name);
    this.content = document.getElementById(
      "single-project"
    )! as HTMLTemplateElement;
    this.renderContentHere = document.getElementById(hostID)! as HTMLDivElement;

    const importedContent = document.importNode(this.content.content, true);
    this.element = importedContent.firstElementChild as HTMLLIElement;
    this.element.id = this.project.id;

    this.element.querySelector("h2")!.textContent = this.project.title;
    this.element.querySelector("h3")!.textContent =
      "Number of people assigned: " + this.project.people.toString();
    this.element.querySelector("p")!.textContent = this.project.description;

    this.attachListeners();

    this.renderContentHere.insertAdjacentElement("beforeend", this.element);
  }

  private attachListeners() {
    this.element.addEventListener("dragstart", this.dragStart.bind(this));
    this.element.addEventListener("dragend", this.dragEnd.bind(this));
  }

  dragStart(event: DragEvent): void {
    ConsoleLog.consoleLogEvent(event.type);
  }

  dragEnd(event: DragEvent): void {
    ConsoleLog.consoleLogEvent(event.type);
  }
}
