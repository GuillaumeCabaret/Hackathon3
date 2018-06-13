<template>
 <div class ="carré">
    <div class="logo">
    <img class="logo" src="src/assets/LOGO-Will.png" alt="logo">
    <input type="text" placeholder="Nom d'utilisateur" />
    </div>
    <div class="login">
      <img class="login" src="src/assets/login.png" alt="">
      <input type="text" placeholder="Mot de passe" />    
    </div>

    <div class="mdp">
      <img class="mdp" src="src/assets/mdp.png" alt="password">       
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      msg: "Login"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  margin-left: 17%;
  width: 55%;
}
.carré {
  margin-top: 60%;
  width: 360px;
  height: 360px;
  background: antiquewhite;
  border-radius: 70%;
}
.login {
  margin-left: 3%;
  width: 35%;
}
.mdp {
  padding-top: 2%;
  margin-left: 3%;
  width: 35%;
}
</style>
