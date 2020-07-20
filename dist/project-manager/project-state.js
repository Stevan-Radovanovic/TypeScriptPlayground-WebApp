import { consoleLogString } from "./console-log.js";
class GlobalState {
    constructor() {
        this.projects = [];
        this.listeners = [];
    }
    static get Instance() {
        if (!this.instance) {
            console.log("%c Creating Global State", consoleLogString);
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
        });
        for (const listenerFn of this.listeners) {
            listenerFn([...this.projects]);
        }
    }
}
export const State = GlobalState.Instance;
