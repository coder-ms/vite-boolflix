<template>
  <div class="cardMovie">
    <div class="box">

      <div class="movieInfo">
        <div class="imgMovie">
          <img :src="store.pathImgURL + movieTag.poster_path" :alt="movieTag.name">
        </div>
        <h6 v-if="movieTag.title"> {{ movieTag.title }}</h6>
        <h6 v-else>{{ movieTag.name }}</h6>

        <p v-if="movieTag.original_title" class="font-weight-bold">{{ movieTag.original_title }}</p>
        <p v-else class="font-weight-bold">{{ movieTag.original_name }}</p>

        <img class="flagx" :src="store.getFlagImg(movieTag.original_language)" alt="">
        <div class="rottenTomatoes">
          <i v-for="star in (Math.round(movieTag.vote_average / 2))" class="fa-solid fa-star"></i>
        </div>
      </div>
      <div class="moviePlot">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
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
.cardMovie {
  display: flex;
  justify-content: space-between;

  .box {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 2s;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    position: relative;

    &:hover {
      transform: rotateY(180deg);
    }

    .movieInfo {
      padding: 5px;
      margin-top: 10px;

      .imgMovie {
        margin-bottom: 10px;

        img {
          width: 100%;
        }
      }

      h6 {
        text-transform: capitalize;
        font-weight: 700;
      }

      p {
        font-size: 14px;
        color: rgb(221, 220, 220);
      }

      img.flagx {
        width: 20px;
      }

      .rottenTomatoes {
        color: gold;
      }
    }

    .moviePlot {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;

      p {
        font-size: 12px;
      }
    }

  }

}
</style>
