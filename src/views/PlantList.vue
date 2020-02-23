<template>
  <div id="home">
    <div class="d-flex flex-column">
      <router-link v-for="item in project.plants" :key="item.id" :to="{ name: 'Plant', params: {plant: item } }">
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
export default {
  name: 'PlantList', //this is the name of the component

  props: ["project"]
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
