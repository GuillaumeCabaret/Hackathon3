<template>
<div>
<img src="../assets/logowhite.png" class="logo">
<img class="wheel" src="../assets/accueil.jpg" alt="wheel">
<div class="text">
  <h3>D'après nos sources, les français ne verifient la pression de leurs pneus qu'une fois par an au lieu d'une fois par mois ce qui peut être extremment dangereux.</h3>
    <h2>Mais pas de panique Will à la solution pour que le necessaire sois fait pour votre sécurité ! :D</h2>
</div>
    <router-link to="/login" tag="button">Se connecter </router-link>
</div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      msg: "HomePage"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  float: left;
  width: 50%;
  margin-top: -4vh;
  margin-left: 24%;
}
.wheel {
  margin-left: -10px;
  width: 110%;
}
.text {
  color: white;
}

button {
  background: white;
  border: 1px solid #8f8be6;
  border-bottom: 1px solid #8f8be6;
  border-radius: 18px 18px 18px 18px;
  box-shadow: 0 1px 0 #e6f5ff inset;
  color: #8f8be6;
  cursor: pointer;
  display: block;
  padding: 30px 40px;
  width: 250px;
  margin-left: 15%;
  margin-top: 10%;
}
</style>
