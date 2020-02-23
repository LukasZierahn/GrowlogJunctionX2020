<template>
  <div class="navbar">
    <md-bottom-bar mdType="center">
      <md-bottom-bar-item to="/social" md-label="Social"><img src="../assets/people.png"/></md-bottom-bar-item>
      <md-bottom-bar-item to="/learn" md-label="Learn"><img src="../assets/book.png"/></md-bottom-bar-item>
      <md-bottom-bar-item to="/home" md-label="Home"><img src="../assets/plant.png"></md-bottom-bar-item>
      <md-bottom-bar-item to="/cart" md-label="Cart"><img src="../assets/cart.png"></md-bottom-bar-item>
      <md-bottom-bar-item to="/profile" md-label="Profile"><img src="../assets/person.png"></md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  components: {
  }
}
</script>

<style>
</style>


