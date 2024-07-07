class Task {
    constructor(description, status) {
        this.description = description;
        this.status = status;
    }
}

class Project {
    constructor(title, taskList) {
        this.title = title;
        this.taskList = taskList;
    }
}

export {Task, Project};