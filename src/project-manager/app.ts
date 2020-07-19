const consoleLogString =
  "color: pink; background-color: black; font-weight: bold";
console.log("%c Project Manager", consoleLogString);

//Project Input Class
class ProjectInput {
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
    this.renderContentHere.id = "user-input";

    console.log("%c Binding Form Properties", consoleLogString);
    this.projectTitle = this.renderContentHere.querySelector(
      "#title"
    )! as HTMLInputElement;
    this.projectDescription = this.renderContentHere.querySelector(
      "#description"
    )! as HTMLInputElement;
    this.projectPeople = this.renderContentHere.querySelector(
      "#people"
    )! as HTMLInputElement;

    this.renderContentHere.addEventListener(
      "submit",
      this.submitHandler.bind(this)
    );

    this.renderContentHere.insertAdjacentElement(
      "afterbegin",
      importedContent.firstElementChild!
    );
  }

  submitHandler() {
    console.log("%c Validating form", consoleLogString);
    event?.preventDefault();
    this.gatherInput();
  }

  gatherInput() {
    console.log("%c Gathering Input", consoleLogString);
  }
}

const projectInput = new ProjectInput();
