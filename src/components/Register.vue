<template lang="html">
 <div class ="carré">
    <div class="logo">
    <img class="logo" src="src/assets/LOGO-Will.png" alt="logo">
    </div>
    <div class="login">
  <form>
    <img class="logo_login" src="src/assets/login.png">  
    <input type="text" name="u" placeholder="Saisissez un nom d'utilisateur" required="required" />
    <img class="logo_mdp" src="src/assets/mdp.png">  
    <input type="password" name="p" placeholder="Saisissez un mot de passe" required="required" />
    <router-link to="/login" tag="button">S'enregistrer</router-link>
    </form>
</div>
  </div>
</template>

<script lang="js">
  export default  {
    name: 'register',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped>
.logo {
  margin-left: 17%;
  width: 55%;
}
.carré {
  margin-top: 58%;
  width: 360px;
  height: 360px;
  background: white;
  border-radius: 70%;
}
.login {
  margin-left: 15%;
  width: 35%;
}

.login form {
  width: 75%;
}
input {
  border: 1px solid #8f8be6;
  border-radius: 18px 18px 18px 18px;
  color: black;
  font-size: 15px;
  outline: medium none;
  padding: 10px;
  width: 238px;
  margin-bottom: 30px;
}

button {
  background: #8f8be6;
  border: 1px solid #8f8be6;
  border-bottom: 1px solid #8f8be6;
  border-radius: 18px 18px 18px 18px;
  box-shadow: 0 1px 0 #e6f5ff inset;
  color: #ffffff;
  cursor: pointer;
  display: block;
  padding: 10px 25px;
  width: 180px;
  margin-left: 38%;
  margin-top: -10%;
}
.logo_login {
  width: 30%;
  float: left;
  margin-top: -18%;
}
.logo_mdp {
  width: 30%;
  float: left;
  margin-top: -18%;
}
</style>
