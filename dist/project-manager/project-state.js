class GlobalState {
    constructor() {
        this.projects = [];
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
