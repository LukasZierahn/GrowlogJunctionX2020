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

export default {
    name: 'ProjectView', //this is the name of the component
    components: {
        PlantList
    },
    data() {
        return {
            project: this.$route.params.project
        }
    }
}
</script>