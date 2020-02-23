
<template>
  <div id="Login">
    <img src="@/assets/tomato.jpg">
    <h2>Growlog</h2>
    <input type="text" name="username" v-model="input.username" placeholder="Username" /><br>
    <input type="password" name="password" v-model="input.password" placeholder="Password" /><br>
    <button type="button" v-on:click="login()">Login</button>
    <button type="button" v-on:click="login()">Login with Facebook</button>
  </div>
</template>
<script>
// import axios from "axios"

export default {
  name: 'Login',
  data() {
    return {
        input: {
          username: "username",
          password: "password"
        }
    }
  },
  methods: {
    async login() {
      if (this.input.username != "" && this.input.password != "") {
        // let response = await axios.get(`https://google.com?usr=${this.input.username}&pw=${this.input.password}`);
        let response = {status: 200};

        if (response.status == 200) {
          this.$router.replace({ name: "Home" });
        } else {
          console.log("The username and / or password is incorrect");
        }
      } else {
          console.log("A username and password must be present");
      }
    }
  }
}

</script>
<style>
#login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>

