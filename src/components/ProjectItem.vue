<template>
  <div class="project">
    <div class="project-name">{{ project.name }}<br>
    </div>
  </div>
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

}
</style>