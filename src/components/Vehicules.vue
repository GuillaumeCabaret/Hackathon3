<template>
  <div>
    <div class="vehHead">
      <h1>Mes véhicules</h1>
      <img src="../assets/logowhite.png" class="logo">
    </div>
    <div class="refCar">
      <p>Marque: </p>
      <p>Couleur: </p>
      <p>Plaque: </p>
      <p>Types Pneus :</p>
    </div>
    <div class="separate">
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vehicules",
  data() {
    return {
      msg: "Vehicules"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.refCar {
  float: left;
  font-weight: bold;
  text-align: right;
}
.refCar p {
  margin-top: 4vh;
  margin-bottom: 2vh;
  color: #fff;
}
.separate {
  color: #fff;
}
.logo {
  float: left;
  width: 30%;
  margin-top: -6vh;
}
div h1 {
  float: right;
  margin-top: -1vh;
  padding-top: 0;
  margin-bottom: 30vh;
}
</style>
