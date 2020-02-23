<template>
  <div class="home-background">
    
    <h1 class ="title">    Your Projects</h1>

    <div class="d-flex flex-column" style="position:fixed; background: white; border-radius:25px; width:80%; left:5%; box-shadow: 4px 2px 12px 3px rgba(0,0,0,0.27);">
      <div v-for="project in projects" :key="project.id">
        <div class="d-flex flex-row" style="position:relative; background: white; color:black; width:90%; left:5%">
          <ProjectItem :project="project"></ProjectItem>
        </div>
      </div>
          <router-link class="button" to="newProject"><div class="button"><img src = "../assets/button.png"/></div></router-link>
    </div>

  </div>
</template>

<script>
import Project from "./../helper/Project";
import ProjectItem from "../components/ProjectItem";
// import PlantList from "../components/PlantList";

export default {
  name: 'Home', //this is the name of the component

  // components: {
  //   PlantList,
  //   ProjectItem
  // },
  components: {
    ProjectItem
  },

  add () {
    this.project.push;
  },

  data () {
    return {
      projects: []
    }
  },

  mounted() {
    console.log(this.$http.defaults.headers.common['Auth-Token']);

    if (localStorage.projects !== undefined) {
      for (let project of localStorage.projects.split("*")) {
        if (project != "") {
          this.projects.push(new Project(project));
        }
      }
    } else {
      this.projects.push(new Project(0, "My Planter"))
      this.projects.push(new Project(1, "My Pot"))

      let output = ""
      for (let project of this.projects) {
        output += project.toSafeString();
      }

      localStorage.projects = output;
    }
  },

}
</script>
<style>
h1 {
  margin-top: 0;
  padding-top: 40px;
}

#home {
  height: 50% !important;
  max-height: 50% !important;
  overflow-y: 0;
}

.home-background {
  min-width: 100vw;
  min-height: 100vh;
  background: rgb(255,146,156);
  background: linear-gradient(332deg, rgba(247,211,198,1) 0%, rgba(255,146,156,1)  100%); 
  
}

.flowRowText {
  position: absolute;
  left: 75px;
}

.flowRowImage {
  position: absolute;
  left: 25px;
}

.itemTop {
  width: 100%;
}

.itemPicture {
  height: "50px";
  width: "50px";
}

.item {
  width: 100%;
  display: block;
}

.button {
  position: relative;
  top:25px;
  left:7.25%;
  width:75%;
  height:20%;
  border-radius: 12px;
  background: white;
  box-shadow: 4px 2px 12px 3px rgba(0,0,0,0.27);
}

.title {
  color:white; text-align:left; left:15%; padding-left:10%
}
</style>
