<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="mt-5 mb-5 text-uppercase">
                    {{ info.name }}
                </h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <img :src="info.image" class="mw-25 mb-5">
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <ul class="list-unstyled">
                    <li>
                        <strong>Types:</strong>
                        {{ info.types.join(', ') }}
                    </li>
                    <li>
                        <strong>Abilities:</strong>
                        {{ info.abilities.join(', ') }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SinglePokemon',
        props: {
            info: Object
        }
    }
</script>
