<template>
<div>
    <img src="../assets/logowhite.png" class="logo">
  <nav class="menu">
  <ul>
    <li class="menu-his">
      <a class="fa fa-facebook" href="#/historique" target="_blank">{{ his }}</a>
    </li>
    <li class="menu-voit">
      <a class="fa fa-google" href="#/vehicules" target="_blank">{{voit}}</a>
    </li>
    <li class="menu-willer">
      <a class="fa fa-dribbble" href="#/command" target="_blank">{{willer}}</a>
    </li>
    <li class="menu-profil">
      <a class="fa fa-codepen" href="#/user" target="_blank">{{profil}}</a>
    </li>
    <li class="menu-cgu">
      <a class="fa fa-linkedin" href="#/cgu" target="_blank">{{cgu}}</a>
    </li>
    <li class="menu-cr">
      <a class="fa fa-github" href="#/resume" target="_blank">{{cr}}</a>
    </li>
  </ul>
  </nav>
</div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      msg: "Menu",
      his: "Historique",
      voit: "Véhicule",
      willer: "Commander un Willer",
      profil: "Profil",
      cgu: "CGU",
      cr: "Compte rendu"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  color: white;
}
.menu {
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%);
  background-color: blue;
  list-style-type: none;
  position: absolute;
}
.menu-his {
  list-style-type: none;
  position: absolute;
  top: -5vh;
  right: 10vh;
  border: solid 1px;
  border-radius: 50%;
  width: 10vh;
  height: 10vh;
  line-height: 85px;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
  color: white;
  background: rgba(255, 255, 255, 0.3);
}
.menu-voit {
  list-style-type: none;
  position: absolute;
  top: -25vh;
  left: -10vh;
  border: solid 1px;
  border-radius: 50%;
  width: 10vh;
  height: 10vh;
  line-height: 85px;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
  color: white;
  background: rgba(255, 255, 255, 0.3);
}
.menu-willer {
  list-style-type: none;
  position: absolute;
  top: -25vh;
  left: 5vh;
  border: solid 1px;
  border-radius: 50%;
  width: 10vh;
  height: 10vh;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
  color: white;
  background: rgba(255, 255, 255, 0.3);
}
.menu-profil {
  list-style-type: none;
  position: absolute;
  top: -5vh;
  left: 10vh;
  border: solid 1px;
  border-radius: 50%;
  width: 10vh;
  height: 10vh;
  line-height: 85px;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
  color: white;
  background: rgba(255, 255, 255, 0.3);
}
.menu-cgu {
  list-style-type: none;
  position: absolute;
  bottom: -25vh;
  left: 5vh;
  border: solid 1px;
  border-radius: 50%;
  width: 10vh;
  height: 10vh;
  line-height: 85px;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
  color: white;
  background: rgba(255, 255, 255, 0.3);
}
.menu-cr {
  list-style-type: none;
  position: absolute;
  bottom: -25vh;
  left: -10vh;
  border: solid 1px;
  border-radius: 50%;
  width: 10vh;
  height: 10vh;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
  color: white;
  background: rgba(255, 255, 255, 0.3);
}
.logo {
  float: left;
  width: 30%;
  margin-top: -6vh
}
</style>
