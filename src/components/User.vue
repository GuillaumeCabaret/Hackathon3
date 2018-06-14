<template>
<div>
<h1>Compte</h1>
<img src="../assets/logowhite.png" class="logo">
<div class="user">
  <ul>
  <li>Nom</li>
  <li>prénom</li>
  <li>Nombre de commandes éffectuées</li>
  <li>commande en cours</li>
  </ul>
</div>
</div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      msg: "User"
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
</style>
