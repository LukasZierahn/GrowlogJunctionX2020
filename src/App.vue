<template>
  <div id="app">
    <div id="bottom">
      <Back v-if="$route.name == 'Plant'"></Back>
      <Navigation v-else-if="$route.name != 'Login'"></Navigation>
    </div>
    <div id="top">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Back from './components/Back'

export default {
  name: 'App',
  components: {
    Navigation,
    Back
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#bottom {
  position: fixed;
  bottom: 0px;
  width: 100%;
}
</style>
