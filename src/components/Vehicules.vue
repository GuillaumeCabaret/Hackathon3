<template>
  <div>
    <div class="vehHead">
      <h1>Mes véhicules</h1>
      <img src="../assets/logowhite.png" class="logo">
      <a href="#/menu" class="close"></a>
    </div>
    <div class="refCar">
      <p>Marque:
        <select v-model="selectedMarque" @change="callModel">
          <option disable value="">Choississez votre marque</option>
          <option v-for="(brand, index ) of brands" :key="index">{{ brand.brandName }}</option>
        </select>
      </p>

      <p>Modèle:
        <select v-model="selectedModel" @change="callVersion">
          <option disable value="">Choississez votre modèle</option>
          <option v-for="(model, index ) of models" :key="index">{{ model.modelName }}</option>
        </select>
      </p>

      <p>Version:
        <select v-model="selectedModVersion" @change="callPneu">
          <option disable value="">Choississez la version</option>
          <option v-for="(modVersion, index ) of modVersions" :key="index">{{ modVersion.versionName }}</option>
        </select>
      </p>
      <p>Types Pneus :
        <select v-model="selectedPneus">
          <option disable value="">Choississez vos pneus</option>
          <option v-for="(pneu, index ) of pneus" :key="index">{{ pneu.tyreName }}</option>
        </select>
      </p>
      <p>Couleur:
        <select v-model="selectedCouleur">
          <option disable value="">Choississez votre couleur</option>
          <option v-for="(color, index ) of colors" :key="index">{{ color.colorName }}</option>
        </select>
      </p>
      <!-- <p>Immatriculation:
        <select v-model="selectedImmat">
          <option v-for="(brand, index ) of brands" :key="index">{{ brand.brandName }}</option>
        </select>
      </p>

      <p> -->
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
    selected: "";
    return {
      posts: [],
      errors: [],
      brands: [],
      models: [],
      colors: [],
      pneus: [],
      modVersions: [],
      brandName: [],
      selectedMarque: "",
      selectedModel: "",
      modelValue: "",
      selectedCouleur: "",
      selectedModVersion: "",
      selectedPneus: ""
    };
  },

  created() {
    this.axios
      .get(
        `https://fipa201gt4.execute-api.eu-central-1.amazonaws.com/dev/brand`
      )
      .then(response => {
        // JSON responses are automatically parsed.
        this.brands = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
    this.axios
      .get(
        `https://fipa201gt4.execute-api.eu-central-1.amazonaws.com/dev/color`
      )
      .then(response => {
        // JSON responses are automatically parsed.
        this.colors = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },

  methods: {
    callModel: function() {
      this.axios
        .get(
          `https://fipa201gt4.execute-api.eu-central-1.amazonaws.com/dev/model/` +
            this.selectedMarque
        )
        .then(response => {
          this.models = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    callVersion: function() {
      this.axios
        .get(
          `https://fipa201gt4.execute-api.eu-central-1.amazonaws.com/dev/version?brand=` +
            this.selectedMarque +
            `&model=` +
            this.selectedModel.substring(
              0,
              this.selectedModel.lastIndexOf(" ")
            ) +
            "  " +
            this.selectedModel.substring(
              this.selectedModel.lastIndexOf(" ") + 1
            )
        )
        .then(response => {
          this.modVersions = response.data;
          console.log("modVersions");
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    callPneu: function() {
      this.axios
        .get(
          `https://fipa201gt4.execute-api.eu-central-1.amazonaws.com/dev/tyre?model=` +
            this.selectedModel.substring(
              0,
              this.selectedModel.lastIndexOf(" ")
            ) +
            "  " +
            this.selectedModel.substring(
              this.selectedModel.lastIndexOf(" ") + 1
            ) +
            `&version=` +
            this.selectedModVersion
        )
        .then(response => {
          this.pneus = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
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
  opacity: 0.3;
}
.close:hover {
  opacity: 1;
}
.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: " ";
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
