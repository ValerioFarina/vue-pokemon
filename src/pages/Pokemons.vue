<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-xs-6 col-md-4 col-lg-3" v-for="(pokemon, index) in pokemons" :key="index">
                <div class="card mt-2 mb-2">
                    <div class="card-body">
                        <h5 class="card-title">
                            {{ pokemon.name }}
                        </h5>
                        <p class="card-text">
                            {{ pokemon.url }}
                        </p>
                    </div>
                </div>
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
  mounted() {
      const self = this;
      self.axios
      .get(self.baseUrl + 'pokemon')
      .then((response) => {
          self.pokemons = response.data.results;
          console.log(self.pokemons);
      });
  }
};

</script>
