<template>
  <div id="home">
    <h1>Plants</h1>
    <div class="d-flex flex-column">
      <router-link v-for="item in plants" :key="item.id" :to="{ name: 'Plant', params: {plant: item } }">
        <div class="d-flex flex-row" style="height : 50px;">
          <div class="flowRowText">{{ item.name }}</div>
          <div class="flowRowImage"> <img :src="item.picture" height="50px" width="50px"></div>
        </div>
        <md-progress-bar class="md-accent" md-mode="determinate" :md-value="item.progress * 100" :height="20"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import Plant from "./../helper/Plant";

export default {
  name: 'Home', //this is the name of the component

  components: {
  },

  data () {
    return {
      plants: []
    }
  },

  mounted() {
    if (localStorage.plants !== undefined) {
      for (let plant of localStorage.plants.split(";")) {
        if (plant != "") {
          this.plants.push(new Plant(plant));
        }
      }
    } else {
      this.plants.push(new Plant(0, "Tomato"))
      this.plants.push(new Plant(1, "Tomato"))
      this.plants.push(new Plant(2, "Tomato"))
      this.plants.push(new Plant(3, "Tomato"))

      let output = ""
      for (let plant of this.plants) {
        output += plant.toSafeString();
      }

      localStorage.plants = output;
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
