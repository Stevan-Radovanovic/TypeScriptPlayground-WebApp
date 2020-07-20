import { consoleLogString } from "./console-log.js";
import { Helper } from "./helper.js";
//Project Input Class
export default class ProjectInput {
  content: HTMLTemplateElement;
  renderContentHere: HTMLDivElement;
  projectTitle: HTMLInputElement;
  projectDescription: HTMLInputElement;
  projectPeople: HTMLInputElement;

  constructor() {
    console.log("%c Initializing Project Form", consoleLogString);
    this.content = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.renderContentHere = document.getElementById("app")! as HTMLDivElement;

    const importedContent = document.importNode(this.content.content, true);
    const element = importedContent.firstElementChild as HTMLFormElement;
    element.id = "user-input";

    console.log("%c Binding Form Properties", consoleLogString);
    this.projectTitle = element.querySelector("#title")! as HTMLInputElement;
    this.projectDescription = element.querySelector(
      "#description"
    )! as HTMLInputElement;
    this.projectPeople = element.querySelector("#people")! as HTMLInputElement;

    this.renderContentHere.addEventListener(
      "submit",
      this.submitHandler.bind(this)
    );

    this.renderContentHere.insertAdjacentElement("afterbegin", element);
  }

  submitHandler() {
    console.log("%c Validating form", consoleLogString);
    event?.preventDefault();
    const userInput = this.gatherInput();
    if (userInput) {
      alert("Project added");
      this.clearInputs();
    } else {
      alert("It ain't right");
    }
  }

  clearInputs() {
    console.log("%c Reseting form", consoleLogString);
    this.projectDescription.value = "";
    this.projectTitle.value = "";
    this.projectPeople.value = "";
  }

  gatherInput(): [string, string, number] | void {
    console.log("%c Gathering Input", consoleLogString);
    const title = this.projectTitle?.value;
    const desc = this.projectDescription?.value;
    const people = +this.projectPeople?.value;
    if (
      !Helper.validatePrimitive(title, { minLength: 4 }) ||
      !Helper.validatePrimitive(desc, { minLength: 5 }) ||
      !Helper.validatePrimitive(people, { min: 0 })
    )
      return;
    return [title, desc, people];
  }
}
