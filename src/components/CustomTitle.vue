<template>
    <h1>{{ titleText }}</h1>
</template>

<script>
export default {
  name: "CustomTitle",
  props: {
    titleText: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
