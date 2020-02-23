<template>
  <div class="home-background">

    <div class="d-flex flex-column">
      <h1>Your Projects</h1>

      <div v-for="project in projects" :key="project.id">
        <div class="d-flex flex-row">
          <ProjectItem :project="project"></ProjectItem>
        </div>
      </div>
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
  background: linear-gradient(332deg, rgba(255,146,156,1) 0%, rgba(247,211,198,1) 100%); 
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

</style>
