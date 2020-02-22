<template>
  <div id="home">
    <h1>Home</h1>
    <RecycleScroller
      class="scroller"
      :items="plants"
      :item-size="50"
      key-field="id"
      v-slot="{ item }"
    >     
      <div class="user">
        {{ item.name }}
        <md-progress-bar class="md-accent" md-mode="determinate" :md-value="item.progress * 100" :height="20"/>
      </div>
    </RecycleScroller>
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

.user {
  width: 100%;
}

</style>
