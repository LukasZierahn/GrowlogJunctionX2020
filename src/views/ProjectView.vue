<template>
    <div class="container">
        {{ project.name }}
        <p></p>
    </div>
</template>

<style>
</style>

<script>
export default {
    name: 'ProjectView', //this is the name of the component
    props: ["project"]
}
</script>