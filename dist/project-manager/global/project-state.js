import ConsoleLog from "../helpers/console-log.js";
class GlobalState {
    constructor() {
        this.projects = [];
        this.listeners = [];
    }
    static get Instance() {
        if (!this.instance) {
            ConsoleLog.consoleLogInitialization("GlobalState");
            this.instance = new GlobalState();
        }
        return this.instance;
    }
    addListener(func) {
        this.listeners.push(func);
    }
    addProject(title, desc, people) {
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
