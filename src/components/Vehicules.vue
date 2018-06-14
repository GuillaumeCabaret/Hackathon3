<template>
  <div>
    <div class="vehHead">
      <h1>Mes véhicules</h1>
      <img src="../assets/logowhite.png" class="logo">
    </div>
    <div class="refCar">
      <p>Marque:
        <select v-model="selectedMarque">
          <option v-for="(brand, index ) of brands" :key="index">{{ brand.brandName }}</option>
        </select>
      </p>

      <p>Modèle:
        <select v-model="selectedModel">
          <option v-for="(model, index ) of models" :key="index">{{ model.brandName }}</option>
        </select>
      </p>

  <!--   <p>Couleur:
         <select v-model="selectedCouleur">
          <option v-for="(brand, index ) of brands" :key="index">{{ brand.brandName }}</option>
        </select>
      </p>
      <p>Immatriculation:
         <select v-model="selectedImmat">
          <option v-for="(brand, index ) of brands" :key="index">{{ brand.brandName }}</option>
        </select>
      </p>

      <p>Types Pneus :
         <select v-model="selectedPneus">
          <option v-for="(brand, index ) of brands" :key="index">{{ brand.brandName }}</option>
        </select>
      </p>  -->
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
    selected: ""
    return {
      posts: [],
      errors: [],
      brands:[],
      models:[], 
      brandName:[],
      selectedMarque: "",
      selectedModel:"",
      modelValue:"",
    };
  },


  created() {
    this.axios.get(`https://fipa201gt4.execute-api.eu-central-1.amazonaws.com/dev/brand`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.brands = response.data;}
      )

      .catch(e => {
        this.errors.push(e);
      });
  },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.refCar {
  float: left;
  font-weight: bold;
  text-align: right;
}
.refCar p {
  /* float : left; */
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
