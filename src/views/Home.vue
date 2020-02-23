<template>
  <div id="home">
    <h1>Your Projects</h1>
    <div class="d-flex flex-column">
      <div v-for="item in projects" :key="item.id">
        <div class="d-flex flex-row">
          <div>
            {{ item.name }}
            <PlantList :project="item"></PlantList>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Project from "./../helper/Project";
import PlantList from "../components/PlantList";

export default {
  name: 'Home', //this is the name of the component

  components: {
    PlantList
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
      this.projects.push(new Project(0, "Shed"))
      this.projects.push(new Project(1, "TomatoFarm"))

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
#home {
  height: 50% !important;
  max-height: 50% !important;
  overflow-y: 0;
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
