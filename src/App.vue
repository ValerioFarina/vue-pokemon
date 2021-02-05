<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <CustomTitle titleText="Pokemon" />
    <Pokemons @pokemon-clicked="showSinglePokemon" />
  </div>
</template>

<script>
import CustomTitle from "./components/CustomTitle.vue";
import Pokemons from "./pages/Pokemons.vue";

export default {
  name: "App",
  components: {
    CustomTitle,
    Pokemons
  },
  data() {
      return {
          pokemonClicked: false
      }
  },
  methods: {
      showSinglePokemon(url) {
          const self = this;
          self.pokemonClicked = true;
          self.axios
          .get(url)
          .then((response) => {
              console.log(response.data);;
          });
      }
  }
};
</script>

<style lang="scss">
@import './assets/scss/app.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
