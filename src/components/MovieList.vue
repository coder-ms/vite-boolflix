<template>
    <div v-if="store.loading">
        Sto caricando i dati
    </div>
    <div class="struct" v-if="!store.loading">
        <div class="cardSection" v-for="(item, index) in store.movieList" :key="item.id">
            <MovieComponent :movieTag="item" />
        </div>
    </div>
</template>

<script>

import { store } from '../store';
import MovieComponent from './MovieComponent.vue';

export default {
    name: "MovieList",
    components: { MovieComponent },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
.struct {
    width: 100%;
    margin: 0 auto;
    background-color: white;
    padding: 40px 30px;
    display: flex;
    color: white;
    flex-wrap: wrap;
    margin-top: 20px;

    .cardSection {
        //FLIPCARD INNER
        border: 1px solid black;
        padding: 10px;
        margin-bottom: 10px;
        text-align: center;
        background-color: rgb(29, 29, 31);
        position: relative;
        width: 20%;
        text-align: center;
        transition: transform 1s;
        transform-style: preserve-3d;

        &:hover {
            transform: rotateY(180deg);
        }
    }
}
</style>