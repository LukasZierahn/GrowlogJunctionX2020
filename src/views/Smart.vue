<template>
    <div v-bind="temperature">{{ temperature }}</div>
</template>

<script>
const axios = require("axios");

export default {
    name: "Smart",
    data() {
        return {
            temperature: 0
        }
    },
    mounted() {
        setInterval(() => {
            axios
                .get("http://localhost/api/smartread/")
                .then(result => {
                    console.log(result);
                    this.temperature = result.data["temp"];
                });
        }, 500);
    }
}
</script>

<style>
</style>