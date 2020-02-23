<template>
  <div class="newProject">
    <h1>Add Project</h1>
    <div class="div1">
        <h2>Name</h2>
        <input type="text" placeholder="Project Name"/> <br>
        <h2>Type</h2>
        <ul style="list-style-type:none;">
            <li>Pot</li>
            <li>Planter</li>
            <li> Vertical Garden</li>
        </ul>
    </div><br>
<div class=div2></div>
</div>
</template>

<script>
export default {
name: 'newProject'
}
</script>

<style>
.div1{
    margin: auto;
    padding: 10px;
    width: 300px;
    height: 200px;
    border: 2px solid black;
    border-radius: 25px
}
.newProject{
    min-width: 100vw;
    min-height: 100vh;
    background: rgb(255,146,156);
    background: linear-gradient(332deg, rgba(255,146,156,1) 0%, rgba(247,211,198,1) 100%); 
}
.div2{

}
</style>

