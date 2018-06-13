<template>
<div>
<h1>Mes véhicules</h1>
<div class="refCar">
<p>Marque: </p>
<p>Couleur: </p>
<p>Plaque: </p>
<p>Pneumatqiues :</p>
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
  float: left;
}
</style>
