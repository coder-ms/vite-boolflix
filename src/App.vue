<!--TEMPLATE HTML GENERALE-->
<template>
  <AppHeader @loadMovie="getMovies" />

  <main>
    <!--<MovieSearch @loadMovie="getMovies" />-->
    <MovieList />


  </main>

</template>

<script>

// IMPORT
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import MovieSearch from './components/MovieSearch.vue';
import MovieList from './components/MovieList.vue';
import { store } from './store';

// SCRIPT EXPORT DEFAULT
export default {
  components: {
    AppHeader,
    MovieSearch,
    MovieList,
  },
  data() {
    return {
      store,
    }
  },

  methods: {
    getTv() {
      store.tvLoad(store.trendingEndpoint[0]); // 0
    },
    getMovies() {
      store.movieLoad(store.trendingEndpoint[1]); // 0
      console.log(tore.movieLoad(store.trendingEndpoint[1]));
    },

  },
  created() {
    this.getMovies()
  }
}
</script>

<style lang="scss" scoped>

</style>
