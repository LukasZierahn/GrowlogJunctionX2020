<template>
  <div class="newProject">
      <img src=""
    <h1>Add Project</h1>
    <div class="div1">
        <h2 class="nameHead">Name</h2>
        <input class= "text" type="text"/> <br>
        <h2 class="typeHead">Type</h2>
            <div id="wrapper">
                <ul>
                    <li>Pot</li>
                    <li>Planter</li>
                    <li> Vertical Garden</li>
                </ul>
            </div>
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
.nameHead{
    text-align: left;
    padding-left: 20px;
}
.typeHead{
    text-align: left;
    padding-left: 20px;
}
.listType{
    text-align: left;
}
.div1{
    margin: auto;
    padding: 10px;
    width: 300px;
    height: 200px;
    border: 2px solid black;
    border-radius: 25px;
}
.newProject{
    min-width: 100vw;
    min-height: 100vh;
    background: rgb(255,146,156);
    background: linear-gradient(332deg, rgba(255,146,156,1) 0%, rgba(247,211,198,1) 100%); 
}
.text{
    border-radius: 25px;
    border: 2px solid black;
    width: 240px;
}
</style>

