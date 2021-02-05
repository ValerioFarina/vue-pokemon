<template>
    <button v-if="show" @click="clickHandler" class="btn btn-success mb-5">
        {{ text }}
    </button>
</template>

<script>
    export default {
        name: 'CustomButton',
        props: {
            text: String,
            show: Boolean,
            clickHandler: Function
        }
    }
</script>
