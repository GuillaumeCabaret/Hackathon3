<template>
  <div id="app">
    <img src="./assets/logowhite.png" class="logo">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
body {
  background-color :#8F8BE6;
}
.logo {
  float: left;
  width: 30%;
  padding-bottom: 10px;

}
</style>
