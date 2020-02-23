<template>
  <div id="newProject">
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
        <button type="button">Done</button>
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
</style>

