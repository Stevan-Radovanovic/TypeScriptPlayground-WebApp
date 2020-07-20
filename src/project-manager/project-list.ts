import { consoleLogString } from "./console-log.js";

export default class ProjectList {
  content: HTMLTemplateElement;
  renderContentHere: HTMLDivElement;
  element: HTMLElement;

  constructor(private type: "active" | "finished") {
    console.log("%c Initializing Project List", consoleLogString);
    this.content = document.getElementById(
      "project-list"
    )! as HTMLTemplateElement;
    this.renderContentHere = document.getElementById("app")! as HTMLDivElement;

    const importedContent = document.importNode(this.content.content, true);
    this.element = importedContent.firstElementChild as HTMLElement;
    this.element.id = `${this.type}-projects`;

    this.element.querySelector("ul")!.id = `${this.type}-projects-list`;
    this.element.querySelector("h2")!.textContent =
      this.type[0].toUpperCase() + this.type.slice(1) + " projects";

    this.renderContentHere.insertAdjacentElement("beforeend", this.element);
  }
}
