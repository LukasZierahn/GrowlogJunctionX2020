<template>
    <div class = "backg" style="width:100%; height: 100%; left:-50%">
    <img src = "../assets/PlantView.png" style="position: absolute; z-index:2; width:100%; height: 100%;">
    <div style= "position:fixed; z-index:45; left:18%; top:232px; font-size: 135%; font-weight:bold; color:#707070; font-family: Segoe ui">{{ temperature }}°C</div>
    </div>
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
                .get("http://192.168.88.114/api/smartread/")
                .then(result => {
                    console.log(result);
                    this.temperature = result.data["temp"];
                }).catch(() => {});
        }, 500);
    }
}
</script>

<style>
.backg{
    position: absolute;
    background-image: "../assets/PlantView.png";
    
}
</style>