<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <CustomTitle titleText="Pokemon" />
    <CustomButton text="Torna a tutti i pokemon" :show="pokemonClicked" :clickHandler="showAllPokemons" />
    <SinglePokemon :info="pokemonInfo" v-if="pokemonClicked" />
    <Pokemons @pokemon-clicked="showSinglePokemon" v-else />
  </div>
</template>

<script>
import CustomTitle from "./components/CustomTitle.vue";
import CustomButton from "./components/CustomButton.vue";
import Pokemons from "./pages/Pokemons.vue";
import SinglePokemon from "./components/SinglePokemon.vue";

export default {
  name: "App",
  components: {
    CustomTitle,
    CustomButton,
    Pokemons,
    SinglePokemon
  },
  data() {
      return {
          pokemonClicked: false,
          pokemonInfo: {
              name: '',
              types: [],
              image: '',
              abilities: []
          }
      }
  },
  methods: {
      showSinglePokemon(url) {
          const self = this;
          self.axios
          .get(url)
          .then((response) => {
              var singlePokemon = response.data;
              self.pokemonInfo.name = singlePokemon.name;
              self.pokemonInfo.image = singlePokemon.sprites.other["dream_world"]["front_default"];
              singlePokemon.types.forEach((item) => {
                  self.pokemonInfo.types.push(item.type.name);
              });
              singlePokemon.abilities.forEach((item) => {
                  self.pokemonInfo.abilities.push(item.ability.name);
              });
              self.pokemonClicked = true;
          });
      },

      showAllPokemons() {
          this.pokemonClicked = false;
          this.pokemonInfo = {
              name: '',
              types: [],
              image: '',
              abilities: []
          };
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
