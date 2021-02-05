<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="(pokemon, index) in pokemons" :key="index">
                <a class="card btn mt-4 mb-4" @click="pokemonClicked(pokemon.url)">
                    <div class="card-body">
                        <h5 class="card-title">
                            {{ pokemon.name }}
                        </h5>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Pokemons",
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
