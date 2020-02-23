<template>
    <div id="newProject">
        <h1>Add Project</h1>

        <div class="div1">
            <h2>Name</h2>
            <input name="project-name" type="text" placeholder="Project Name" v-model="projectName" />
            <h2>Type</h2>
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
.div1{
    margin: auto;
    padding: 10px;
    width: 300px;
    height: 100 px;
    border: 2px solid black
}
</style>

