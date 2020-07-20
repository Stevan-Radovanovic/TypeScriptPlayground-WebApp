import Project from "./project-model.js";
import ConsoleLog from "./console-log.js";

class GlobalState {
  private projects: Project[] = [];
  private listeners: Function[] = [];
  private static instance: GlobalState;

  public static get Instance() {
    if (!this.instance) {
      ConsoleLog.consoleLogInitialization("GlobalState");

      this.instance = new GlobalState();
    }
    return this.instance;
  }

  private constructor() {}

  public addListener(func: Function) {
    this.listeners.push(func);
  }

  public addProject(title: string, desc: string, people: number) {
    this.projects.push({
      id: Math.random().toString(),
      title: title,
      description: desc,
      people: people,
      status: "active",
    });
    for (const listenerFn of this.listeners) {
      listenerFn([...this.projects]);
    }
  }
}

export const State = GlobalState.Instance;
