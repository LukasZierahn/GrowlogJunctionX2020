<template>
  <div>
    <div class="d-flex flex-column">
      <div class="d-flex flex-row">
        {{plant.name}}
        <img :src="plant.picture" height="100px" width="100px">
      </div>
      <md-progress-bar class="md-accent" md-mode="determinate" :md-value="plant.progress * 100" :height="50"/>
    </div>
    <h2>Next Water needed in {{plant.nextWaterNeed - (new Date())}} Milliseconds</h2>
  </div>
</template>

<script>


export default {
  name: 'Contact',

  props : ["plant"],

}
</script>
