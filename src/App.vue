<template>
  <div id="app">
    <div id="bottom">
      <Navigation></Navigation>
    </div>
    <div id="top">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'App',
  components: {
    Navigation
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
  margin-top: 60px;
}

#top {
  width: 100%;

}

#bottom {
  position: fixed;
  bottom: 0px;
  width: 100%;
}
</style>
