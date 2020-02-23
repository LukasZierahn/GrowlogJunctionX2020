export default class Data {
    static getAllProjects() {
        if (localStorage.projects === undefined) {
            return [];
        } else {
            return JSON.parse(localStorage.projects);
        }
    }
    
    static getProject(id) {
        return this.getAllProjects()[id];
    }
    
    static addProject(project) {
        var projects = this.getAllProjects() || [];

        console.log(projects);
        console.log(typeof project);
        console.log(typeof projects);

        projects.push(project);
        localStorage.setItem("projects", JSON.stringify(projects));
        return true;
    }
    
    static deleteProject(id) {
        var projects = this.getAllProjects() || [];
        for (var i = 0; i < projects.length; i++) {
            var project = projects[i];
    
            if (project.id == id) {
                delete projects[i];
                return true;
            }
        }
        return false;
    }
}