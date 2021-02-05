<template>
    <div>

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
