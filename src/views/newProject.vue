<template>
  <div class="newProject">
    <h1>Add Project</h1>
    <div class="div1">
        <h2 class="nameHead">Name</h2>
        <input class= "text" type="text"/> <br>
        <h2 class="typeHead">Type</h2>
      <form action="/action_page.php">
<select class="select" id="type" name="cars" multiple>
  <option value="volvo">Pot</option>
  <option value="saab">Planter</option>
  <option value="opel">Vertical Garden</option>
</select><br>
</form>  
    </div><br>
<div class="div2"><img src="../assets/button.png"/></div>
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
    height: 13px;
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
    height: 260px;
    border: 2px solid grey;
    border-radius: 25px;
    background-color: white;
}
.div2{
  position: relative;
  margin-left: 135px;
  top:25px;
  left:7.25%;
  width:50%;
  height:20%;
  border-radius: 12px;
  background: white;
  box-shadow: 4px 2px 12px 3px rgba(0,0,0,0.27);
}
.newProject{
    min-width: 100vw;
    min-height: 100vh;
    background: rgb(255,146,156);
    background: linear-gradient(332deg, rgba(255,146,156,1) 0%, rgba(247,211,198,1) 100%); 
}
.text{
    border-radius: 25px;
    border: 2px solid grey;
    width: 240px;
}
.select{
    width: 227px;
    font-size: 15px;
}
</style>

