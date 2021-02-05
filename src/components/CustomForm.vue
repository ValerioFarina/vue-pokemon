<template>
    <form @submit="newSearch(searchedPokemon)">
        <input type="text" :placeholder="inputPlaceHolder" v-model="searchedPokemon">
        <button type="submit" class="btn btn-success ml-2">{{ buttonText }}</button>
    </form>
</template>

<script>
    export default {
        name: 'CustomForm',
        props: {
            buttonText: String,
            inputPlaceHolder: String
        },
        data() {
            return {
                searchedPokemon: ''
            }
        },
        methods: {
            newSearch(searchedPokemon) {
                this.$emit('newSearch', searchedPokemon);
            }
        }
    }
</script>
