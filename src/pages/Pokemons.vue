<template>
    <div class="container text-uppercase">
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="(pokemon, index) in pokemons" :key="index">
                <Card :title="pokemon.name" :url="pokemon.url" @click.native="pokemonClicked(pokemon.url)" />
            </div>
        </div>
    </div>
</template>

<script>
import Card from "./../components/Card.vue";

export default {
  name: "Pokemons",
  components: {
      Card
  },
  data() {
    return {
        pokemons: []
    }
  },
  methods: {
      pokemonClicked(url) {
          this.$emit('pokemon-clicked', url);
      }
  },
  mounted() {
      const self = this;
      self.axios
      .get(self.baseUrl + 'pokemon')
      .then((response) => {
          self.pokemons = response.data.results;
      });
  }
};

</script>
