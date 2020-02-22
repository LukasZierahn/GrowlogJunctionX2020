<template>
  <div id="home">
    <h1>Plants</h1>
    <div class="d-flex flex-column">
      <div v-for="item in plants" :key="item.id">
        <div class="d-flex flex-row" style="height : 50px;">
          <div class="flowRowText">{{ item.name }}</div>
          <div class="flowRowImage"> <img :src="item.picture" height="50px" width="50px"></div>
        </div>
          <md-progress-bar class="md-accent" md-mode="determinate" :md-value="item.progress * 100" :height="20"/>
      </div>
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
      plants: [
        new Plant(0, "Tomato"),
        new Plant(1, "Tomato"),
        new Plant(2, "Tomato"),
        new Plant(3, "Tomato"),
        new Plant(4, "Tomato"),
        new Plant(5, "Tomato"),
        new Plant(6, "Tomato"),
        new Plant(7, "Tomato"),
        new Plant(8, "Tomato"),
        new Plant(9, "Tomato"),
        new Plant(10, "Tomato"),
        new Plant(11, "Tomato"),
        new Plant(12, "Tomato"),
        new Plant(13, "Tomato"),
        new Plant(14, "Tomato"),
        new Plant(15, "Tomato"),
        new Plant(16, "Tomato"),
        new Plant(17, "Tomato"),
        new Plant(18, "Tomato"),
        new Plant(19, "Tomato"),
        new Plant(20, "Tomato")
      ]
    }
  }
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
