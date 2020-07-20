import Project from "./project-model.js";
import { consoleLogString } from "./console-log.js";

class GlobalState {
  private projects: Project[] = [];

  private static instance: GlobalState;

  public static get Instance() {
    if (!this.instance) {
      console.log("%c Creating Global State", consoleLogString);
      this.instance = new GlobalState();
    }
    return this.instance;
  }

  private constructor() {}

  public addProject(title: string, desc: string, people: number) {
    this.projects.push({
      id: Math.random().toString(),
      title: title,
      description: desc,
      people: people,
    });
  }
}

export const State = GlobalState.Instance;
