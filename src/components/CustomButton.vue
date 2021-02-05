<template>
    <button class="btn btn-success mb-5">
        {{ text }}
    </button>
</template>

<script>
    export default {
        name: 'CustomButton',
        props: {
            text: String
        }
    }
</script>
