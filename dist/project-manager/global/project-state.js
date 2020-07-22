"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
const console_log_js_1 = __importDefault(require("../helpers/console-log.js"));
class GlobalState {
    constructor() {
        this.projects = [];
        this.listeners = [];
    }
    static get Instance() {
        if (!this.instance) {
            console_log_js_1.default.consoleLogInitialization("GlobalState");
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
    moveProject(id, type) {
        const project = this.projects.find((project) => project.id === id);
        if (project) {
            project.status = type;
            for (const listenerFn of this.listeners) {
                listenerFn([...this.projects]);
            }
        }
    }
}
exports.State = GlobalState.Instance;
