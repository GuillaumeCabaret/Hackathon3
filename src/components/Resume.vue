<template>
<div>
  <div>
    <h1>Compte Rendu</h1>
    <img src="../assets/logowhite.png" class="logo">
    <a href="#/menu" class="close"></a>

<div><p class="etatav">Etat des Pneus avant : <span class="orange">Moyen</span></p>
   <p class="etatar">Etat des Pneus arrière : <span class="vert">Excellent</span></p>
   </div>
      <img src="../assets/voiture.png" class="voiture">
      <div class="Roundright"><p>2.3 bar</p></div>
      <div class="RoundrightDown"><p>2.5 bar</p></div>
      <div class="Roundleft"><p>2.3 bar</p></div>
      <div class="RoundleftDown"><p>2.5 bar</p></div>
  </div>



  <div>
    <div class="information message">
      <h2>9 personnes sur 10</h2>
	    <p>ne vérifient la pression qu’une fois
      par an au lieu d’une par mois</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Resume",
  data() {
    return {
      msg: "Resume"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
  color: white
}
p {
  font-size: 21px;
}
.logo {
  float: left;
  width: 30%;
  margin-top: -56px;
}
.close {
  position: absolute;
  right: 20px;
  top: 28px;
  width: 32px;
  height: 32px;
}
.close:hover {
  opacity: 1;
}
.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: " ";
  height: 33px;
  width: 2px;
  background-color: white;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

h1 {
  float: right;
  margin-top: -1vh;
  padding-top: 0;
  margin-bottom: 30vh;
  position: absolute;
  left: 30%;
}

.voiture {
  height: 35vh;
  position: relative;
  top: 19vh;
  left: -7.5vh;
}

.Roundright {
  transform: rotate(95deg) translate(-9em) rotate(-95deg);
  -webkit-transform: rotate(95deg) translate(-9em) rotate(-95deg);
  -ms-transform: rotate(95deg) translate(-9em) rotate(-95deg);
  height: 9vh;
  width: 9vh;
  background-color: aliceblue;
  border-radius: 50%;
  line-height: 8vh;
}

.RoundrightDown {
  transform: rotate(104deg) translate(-3em) rotate(-103deg);
  -webkit-transform: rotate(104deg) translate(-3em) rotate(-103deg);
  -ms-transform: rotate(104deg) translate(-3em) rotate(-103deg);
  height: 9vh;
  width: 9vh;
  background-color: aliceblue;
  border-radius: 50%;
  line-height: 8vh;
}

.Roundleft {
  transform: rotate(128deg) translate(-26em) rotate(-127deg);
  -webkit-transform: rotate(128deg) translate(-26em) rotate(-127deg);
  -ms-transform: rotate(128deg) translate(-26em) rotate(-127deg);
  height: 9vh;
  width: 9vh;
  background-color: aliceblue;
  border-radius: 50%;
  line-height: 8vh;
}

.RoundleftDown {
  transform: rotate(138deg) translate(-22em) rotate(-138deg);
  -webkit-transform: rotate(138deg) translate(-22em) rotate(-138deg);
  -ms-transform: rotate(138deg) translate(-22em) rotate(-138deg);
  height: 9vh;
  width: 9vh;
  background-color: aliceblue;
  border-radius: 50%;
  line-height: 8vh;
}
h2 {
  font-weight: 100;
  font-size: 30pt;
  line-height: 1.3em;
  margin: 15px 0;
}

div.message {
  position: relative;
  padding: 10px;
  padding-left: 18px;
  margin: 30px 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  background: white;
  color: #8f8be6;
  margin-top: -18vh;

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
h2 {
  font-size: 22pt;
}
.etatav {
  position: absolute;
  top: 15%;
  font-size: 20px;
}
.etatar {
  position: absolute;
  top:18%;
  font-size: 20px;
}
.orange {
  color: orange
}
.vert {
  color: greenyellow
}
</style>
