import ConsoleLog from "../helpers/console-log.js";
import Project from "../models/project-model.js";

export default class ProjectItem {
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
    this.element.querySelector(
      "h3"
    )!.textContent = this.project.people.toString();
    this.element.querySelector("p")!.textContent = this.project.description;

    this.renderContentHere.insertAdjacentElement("beforeend", this.element);
  }
}
