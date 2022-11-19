<template>
  <div class="movieInfoFront">
    <div class="imgMovie">
      <img :src="store.pathImgURL + movieTag.poster_path" :alt="movieTag.name">
    </div>
  </div>
  <div class="moviePlotBack">
    <h6 v-if="movieTag.title"> {{ movieTag.title }}</h6>
    <h6 v-else>{{ movieTag.name }}</h6>

    <p v-if="movieTag.original_title" class="font-weight-bold">{{ movieTag.original_title }}</p>
    <p v-else class="font-weight-bold">{{ movieTag.original_name }}</p>

    <img class="flagx" :src="store.getFlagImg(movieTag.original_language)" alt="">
    <div v-if="movieTag.vote_average" class="rottenTomatoes">
      <i v-for="star in (Math.round(movieTag.vote_average / 2))" class="fa-solid fa-star"></i>
      <i v-for="star in (5 - (Math.round(movieTag.vote_average / 2)))" class="fa-regular fa-star"></i>
    </div>
    <div v-else="movieTag.vote_average" class="rottenTomatoes">
      <p>VOTAZIONE NON DISPONIBILE</p>
    </div>
    <p>Trama:</p>
    <p>{{ movieTag.overview }}</p>
  </div>

</template>

<script>
import { store } from '../store';

export default {
  data() {
    return {
      store
    }
  },

  props: {
    movieTag: Object
  }
}
</script>


<style lang="scss" scoped>
//FLIPCARD FRONT

.movieInfoFront {
  backface-visibility: hidden;
  width: 100%;
  height: 100%;

  .imgMovie {

    img {
      width: 100%;
      height: 550px;
    }
  }
}

.moviePlotBack {
  backface-visibility: hidden;
  position: absolute;
  color: white;
  top: 0;
  left: 0;
  padding: 10px;
  transform: rotateY(180deg);
  text-align: left;
  overflow-y: auto;

  h6 {
    text-transform: capitalize;
    font-weight: 700;
  }

  p {
    font-size: 12px;
    color: rgb(221, 220, 220);
  }

  img.flagx {
    width: 30px;
  }

  .rottenTomatoes {
    margin-bottom: 10px;

    .fa-solid {
      color: gold;
    }
  }

  p {
    font-size: 12px;
  }
}
</style>
