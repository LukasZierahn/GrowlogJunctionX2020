<template>
    <div class="container">
        <p>{{project.name}}</p>
        <PlantList :project="project"></PlantList>
    </div>
</template>

<style>
</style>

<script>
import PlantList from "../components/PlantList";
// const axios = require("axios");
import Data from "../helper/Data";

export default {
    name: 'ProjectView', //this is the name of the component
    components: {
        PlantList
    },
    // props: ["id"],
    data() {
        return {
            id: this.$route.params.id,
            project: null
        }
    },
    mounted() {
        this.project = Data.getProject(this.id);

        // axios
        //     .get("http://192.168.88.114:8000/api/project/" + this.id)
        //     .then(response => {
        //         this.project = JSON.parse(response);
        //     });
    },
}
</script>