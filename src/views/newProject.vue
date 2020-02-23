<template>
    <div id="newProject">
        <h1>Add Project</h1>

        <div class="div1">
            <h2 class="nameHead">Name</h2>
            <input name="project-name" type="text" placeholder="Project Name" v-model="projectName" />
            <h2 class="typeHead">Type</h2>
            <input name="project-type" type="text" placeholder="Project Type" v-model="projectType" />
        </div>

        <button type="button" @click="addProject()">Add Project</button>
    </div>
</template>

<script>
// const axios = require("axios");
import Data from "../helper/Data";

export default {
    name: 'NewProject',
    data() {
        return {
            projectName: "",
            projectType: "",
        }
    },
    methods: {
        addProject() {
            Data.addProject({
                name: this.projectName,
                type: this.projectType
            });
            var projects = Data.getAllProjects();
            this.closeView(projects.length - 1);
        },
        closeView(projectId) {
            this.$router.push({ name: "Project", params: { id: projectId } });
        },
    },
}
</script>

<style>
.nameHead{
    text-align: left;
    padding-left: 20px;
}
.typeHead{
    text-align: left;
    padding-left: 20px;
}
.listType{
    text-align: left;
}
.div1{
    margin: auto;
    padding: 10px;
    width: 300px;
    height: 200px;
    border: 2px solid black;
    border-radius: 25px;
}
.newProject{
    min-width: 100vw;
    min-height: 100vh;
    background: rgb(255,146,156);
    background: linear-gradient(332deg, rgba(255,146,156,1) 0%, rgba(247,211,198,1) 100%); 
}
.text{
    border-radius: 25px;
    border: 2px solid black;
    width: 240px;
}
</style>

