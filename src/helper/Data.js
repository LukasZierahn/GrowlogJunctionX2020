export default class Data {
    static getAllProjects() {
        if (localStorage.projects === undefined) {
            return [];
        } else {
            var list = JSON.parse(localStorage.projects);

            for (var i = 0; i < list.length; i++) {
                list[i].id = i;
            }

            return list;
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