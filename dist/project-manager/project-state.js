import { consoleLogString } from "./console-log.js";
class GlobalState {
    constructor() {
        this.projects = [];
    }
    static get Instance() {
        if (!this.instance) {
            console.log("%c Creating Global State", consoleLogString);
            this.instance = new GlobalState();
        }
        return this.instance;
    }
    addProject(title, desc, people) {
        this.projects.push({
            id: Math.random().toString(),
            title: title,
            description: desc,
            people: people,
        });
    }
}
export const State = GlobalState.Instance;
