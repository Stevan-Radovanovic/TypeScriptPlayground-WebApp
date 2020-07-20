import Project from "./project-model.js";
import ProjectInput from "./project-input.js";

class GlobalState {
  private projects: Project[] = [];

  public addProject(title: string, desc: string, people: number) {
    this.projects.push({
      id: Math.random().toString(),
      title: title,
      description: desc,
      people: people,
    });
  }
}
