<template>
<div>
<h1>Compte</h1>
<img src="../assets/logowhite.png" class="logo">
<a href="#/menu" class="close"></a>
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
  margin-top: -11vh;
}
.close {
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

</style>
