<!--TEMPLATE HTML GENERALE-->
<template>
  <AppHeader />
  <main>
    <MovieSearch @loadMovie="getMovies" />
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
    getMovies() {
      store.movieLoad(store.trendingEndpoint[1]); // 0
    }
  },
  created() {
    this.getMovies()
  }
}
</script>

<style lang="scss" scoped>

</style>
