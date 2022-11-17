<!--TEMPLATE HTML GENERALE-->
<template>
  <AppHeader @loadMovie="getMovies" />

  <main>
    <MovieList />
  </main>

</template>

<script>

// IMPORT
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import MovieList from './components/MovieList.vue';
import { store } from './store';

// SCRIPT EXPORT DEFAULT
export default {
  components: {
    AppHeader,
    MovieList,
  },
  data() {
    return {
      store,
    }
  },

  methods: {
    getMovies() {
      //console.log('store.searchSeries =' + store.searchSeries);
      //console.log('store.searchTitleVal =' + store.searchTitleVal);
      let endPoint = store.searchEndpoint[0];
      if ('movies' == store.searchSeries) endPoint = store.searchEndpoint[1];
      store.movieLoad(endPoint);
    },

  },
  created() {
    this.getMovies();
  }
}
</script>

<style lang="scss" scoped>

</style>
