<template>
<div>
<h1>Menu</h1>
<img src="../assets/logowhite.png" class="logo">

 <div class="circle-menu">
    <ul>
        <li>
            <a class="cgu" href="#/cgu">CGU</a>
        </li>
        <li>
            <a class="compte_rendu" href="#/resume">Compte rendu</a>
        </li>
        <li>
            <a class="historique" href="#/historique">Historique</a>
        </li>
        <li>
            <a class="mes_voitures" href="#/vehicules">Mes Voitures</a>
        </li>
        <li>
            <a class="commander" href="#/command">Commander</a>
        </li>
        <li>
            <a class="profil" href="#/user">Profil</a>
        </li>
    </ul>
</div>
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
.logo {
  float: left;
  width: 30%;
  margin-top: -12vh;
}

.circle-menu li {
  list-style: none;
  display: inline;
}

.circle-menu {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  margin: 20em auto 7em;
}

.circle-menu a {
  font-weight: bolder;
  font-size: 11px;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8em;
  height: 8em;
  line-height: 8em;
  margin: -4em;
  -moz-border-radius: 4em;
  -webkit-border-radius: 4em;
  border-radius: 4em;
  text-align: center;
  text-decoration: none;
  color: black;
  box-sizing: border-box;
}

.circle-menu a.cgu {
  background: white;
}

.circle-menu a.compte_rendu {
  background: white;
}

.circle-menu a.historique {
  background: white;
}

.circle-menu a.mes_voitures {
  background: white;
}

.circle-menu a.commander {
  background: white;
}

.circle-menu a.profil {
  background: white;
}

/* 360/7= 60 roughly so for 7 elements rotate the element every 60deg. 12em translate is half the container */

.circle-menu .cgu {
  transform: rotate(60deg) translate(12em) rotate(-60deg);
  -webkit-transform: rotate(60deg) translate(12em) rotate(-60deg);
  -ms-transform: rotate(60deg) translate(12em) rotate(-60deg);
}

.circle-menu .compte_rendu {
  transform: rotate(120deg) translate(12em) rotate(-120deg);
  -webkit-transform: rotate(120deg) translate(12em) rotate(-120deg);
  -ms-transform: rotate(120deg) translate(12em) rotate(-120deg);
}

.circle-menu .historique {
  transform: rotate(180deg) translate(12em) rotate(-180deg);
  -webkit-transform: rotate(180deg) translate(12em) rotate(-180deg);
  -ms-transform: rotate(180deg) translate(12em) rotate(-180deg);
}

.circle-menu .mes_voitures {
  transform: rotate(240deg) translate(12em) rotate(-240deg);
  -webkit-transform: rotate(240deg) translate(12em) rotate(-240deg);
  -ms-transform: rotate(240deg) translate(12em) rotate(-240deg);
}

.circle-menu .commander {
  transform: rotate(300deg) translate(12em) rotate(-300deg);
  -webkit-transform: rotate(300deg) translate(12em) rotate(-300deg);
  -ms-transform: rotate(300deg) translate(12em) rotate(-300eg);
}

.circle-menu .profil {
  transform: rotate(360deg) translate(12em) rotate(-360deg);
  -webkit-transform: rotate(360deg) translate(12em) rotate(-360deg);
  -ms-transform: rotate(360deg) translate(12em) rotate(-360deg);
}
</style>
