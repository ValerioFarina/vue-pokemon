<template>
    <a class="card btn mt-4 mb-4" href="#">
        <div class="card-body">
            <h5 class="card-title">
                {{ title }}
            </h5>
        </div>
    </a>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            title: String
        }
    }
</script>
