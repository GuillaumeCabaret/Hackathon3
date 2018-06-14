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
       posts: [],
      errors: []
    };
  },
 created() {
    axios.get(`https://fipa201gt4.execute-api.eu-central-1.amazonaws.com/dev/
`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
},
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  float: left;
  width: 30%;
  margin-top: -12vh;
}
</style>
