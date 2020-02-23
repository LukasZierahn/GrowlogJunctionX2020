<template>
  <div>
    <div class="d-flex flex-column">
      <div class="d-flex flex-row">
        {{plant.name}}
        <img :src="plant.picture" height="100px" width="100px">
      </div>
      <md-progress-bar class="md-accent" md-mode="determinate" :md-value="plant.progress * 100" :height="50"/>
    </div>
    <div v-on:click="plant.Water()">
      <h2>Next Water needed in {{Math.floor(timeLeft / (1000 * 60 * 60 * 24))}} Days and {{Math.floor(timeLeft / (1000 * 60 * 60)) % 24}} Hours</h2>
    </div>
    <div>
  <b-button v-b-modal="'my-modal'">Show Modal</b-button>

  <!-- The modal -->
  <b-modal id="my-modal">Hello From My Modal!</b-modal>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Contact',
  data() {
    return {
      timeLeft: 0,
      killTimeout: false,
      modalShow: true
    }
  },

  props : ["plant"],

  methods: {
    countDownTimer() {
      setTimeout(() => {
        this.timeLeft = this.plant.nextWaterNeed - (new Date());
        if (!this.killTimeout) {
          this.countDownTimer()
        }
      }, 1000);
    }
  },

  beforeDestroy() {
    this.killTimeout = true;
  },

  mounted() {
    this.killTimeout = false;
    this.countDownTimer()
  }

}
</script>
