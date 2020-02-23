<template>
  <router-link :to="{ name: 'Project', params: { id: project.id } }">
    <div class="project">
      <div class="project-name">{{ project.name }}</div>
      <div class="project-plants-bg"></div>
      <hr class="project-split">
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
  background-color: rgba(255,255,255,0);
}

.project-name {
  color: #707070;
  position: relative;
  top:-10px;
  left:5%;
  font-size: 170%;
  text-align: left;
}
.project-plants-bg {
  background-color: #d6d6d6;
  position: relative;
  height:50px;
  width:300px;
  border-radius: 25px;
}
.project-split{
  position: relative;
  color: #f8f0f0;
  width:75%;
  top:40px;
}
</style>
