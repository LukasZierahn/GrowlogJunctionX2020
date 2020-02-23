<template>
  <div class="newProject">
    <h1>Add Project</h1>
    <div class="div1">
        <h2 class="nameHead">Name</h2>
        <input class= "text" type="text" v-model="projectName"/> <br>
        <h2 class="typeHead">Type</h2>
        <select class ="select" id="type" v-model="projectType" name="type" multiple>
            <option value ="Pot">Pot</option>
            <option value="Planter">Planter</option>
            <option value="Vertical Garden">Vertical Garden</option>
        </select><br>
    </div><br>
    <div class="div2" @click="addProject"><img src="../assets/button.png"/></div>
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
    height: 13px;
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
    height: 260px;
    border: 2px solid grey;
    border-radius: 25px;
    background-color: white;
}
.div2{
  position: relative;
  margin-left: 135px;
  top:25px;
  left:7.25%;
  width:50%;
  height:20%;
  border-radius: 12px;
  background: white;
  box-shadow: 4px 2px 12px 3px rgba(0,0,0,0.27);
}
.newProject{
    min-width: 100vw;
    min-height: 100vh;
    background: rgb(255,146,156);
    background: linear-gradient(332deg, rgba(255,146,156,1) 0%, rgba(247,211,198,1) 100%); 
}
.text{
    border-radius: 25px;
    border: 2px solid grey;
    width: 240px;
}
.select{
    width: 227px;
    font-size: 15px;
}
</style>

