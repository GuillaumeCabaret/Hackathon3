<template>
<div>
<h1>Menu </h1>
<router-link class="logout" to="/" tag="button"><i class="fas fa-sign-out-alt"></i></router-link>

<img src="../assets/logowhite.png" class="logo">  
 <div class="circle-menu">
    <ul>
        <li>
            <a id="one" class="cgu" href="#/cgu">CGU</a>
        </li>
        <li>
            <a id="two" class="compte_rendu" href="#/resume">Compte rendu</a>
        </li>
        <li>
            <a id="one" class="historique" href="#/historique">Historique</a>
        </li>
        <li>
            <a id="one" class="mes_voitures" href="#/vehicules">Mes Voitures</a>
        </li>
        <li>
            <a id="one" class="commander" href="#/command">Commander</a>
        </li>
        <li>
            <a id="one" class="profil" href="#/user">Profil</a>
        </li>
    </ul>
</div>
<div>
  <div class="information message">
  <h2>Will vous informe</h2>
	<p>Des pneus entretenus sont synonymes d'économies !</p>
</div>
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
#one {
  line-height: 6em;
}

#two {
  line-height: 3em;
}
.logo {
  float: left;
  width: 30%;
  margin-top: -11vh;
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
  margin: 18em auto 7em;
}

.circle-menu a {
  font-weight: bolder;
  font-size: 12px;
  display: block;
  position: absolute;
  top: 50%;
  left: 53%;
  width: 6em;
  height: 6em;
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

/* Message information */

h2 {
  font-weight: 100;
  font-size: 30pt;
  line-height: 1.3em;
  margin: 15px 0;
}

div.message {
  position: relative;
  padding: 10px;
  margin: 30px 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  background: white;
  color: #8f8be6;
  margin-top: 65vh;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
div.message:hover {
  box-shadow: 0 15px 20px rgba(10, 0, 10, 0.3);
}

div.message:before {
  content: "";
  font-family: FontAwesome;
  position: absolute;
  display: block;
  top: -21px;
  left: 50%;
  margin: 0 -21px;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  width: 24px;
  padding: 10px;
  background: inherit;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  color: rgba(255, 255, 255, 0.75);
  border-radius: 50%;
  border: 2px solid transparent;
  z-index: 2;
}

div.message.information:before {
  content: "\f129";
  color: black;
}

.logout {
  float: right;
  margin-top: -7vh;
  margin-left: 34vh;
  background-color: #8f8be6;
  border-radius: 50%;
  border: transparent;
  width: 8vh;
  font-size: 4vh;
  color: gainsboro;
}
</style>
