<template>
  <div>
    <div class="vehHead">
      <h1>Mes véhicules</h1>
      <img src="../assets/logowhite.png" class="logo">
      <a href="#/menu" class="close"></a>
    </div>
    <div class="refCar">
      <p>Marque: </p>
      <p>Couleur: </p>
      <p>Plaque: </p>
      <p>Types Pneus :</p>
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
    font-weight: bold;
    text-align: right;
    margin-top: 2vh;
    position: absolute;
    margin-top: 6vh;
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
  margin-top: -56px;
}
div h1 {
  float: right;
  margin-top: -1vh;
  padding-top: 0;
  margin-bottom: 30vh;
  font-size: 2vh;
  position: absolute;
  left: 36%;
}
hr {
    position: absolute;
    width: 21vh;
    left: 20%;
    background-color: papayawhip;
    height: 1.5px;
}
.close {
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
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
  background-color: white;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

</style>
