<template>
  <div class="cardMovie">
    <div class="box">

      <div class="imgMovie">
        <img :src="store.pathImgURL + movieTag.poster_path" :alt="movieTag.name">
      </div>

      <div class="movieInfo">

        <h6 v-if="movieTag.title"> {{ movieTag.title }}</h6>
        <h6 v-else>{{ movieTag.name }}</h6>

        <p v-if="movieTag.original_title" class="font-weight-bold">{{ movieTag.original_title }}</p>
        <p v-else class="font-weight-bold">{{ movieTag.original_name }}</p>

        <img class="flagx" :src="store.getFlagImg(movieTag.original_language)" alt="">
        <p>{{ movieTag.vote_average }} / 10</p>
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
    width: 100%;

    .imgMovie {
      margin-bottom: 10px;

      img {
        width: 100%;
      }
    }

  }

  .movieInfo {
    padding: 5px;
    margin-top: 10px;

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
  }
}
</style>
