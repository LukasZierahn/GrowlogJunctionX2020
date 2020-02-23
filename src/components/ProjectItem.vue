<template>
  <router-link :to="{ name: 'Project', params: { project: project } }">
    <div class="project">
      <div class="project-name">{{ project.name }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Project', //this is the name of the component
  props: ["project"]
}
</script>

<style>
.project {
  border-radius: 25px;
  padding: 5vh 0;
  background-color: blue;
}

.project-name {
  color: white;
}
</style>