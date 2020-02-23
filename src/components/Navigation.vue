<template>
  <div class="navbar">
    <md-bottom-bar mdType="fixed">
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
.gfg { 
  width:auto; 
  text-align:center; 
  padding:20px; 
}

img { 
  max-width:100%; 
  height:auto;
  display:inline; 
}

.navbar{
  color:white;
  opacity: 1.0;
  background-color: white;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  white-space: nowrap;
}

.navbar * {
  display: inline;
}
</style>


