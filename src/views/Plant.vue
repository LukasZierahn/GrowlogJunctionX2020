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
      <h2>Next Water needed in {{timeLeft}} Milliseconds</h2>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Contact',
  data() {
    return {
      timeLeft: 0,
      killTimeout: false
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
