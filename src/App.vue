<!--TEMPLATE HTML GENERALE-->
<template>
  <AppHeader />
  <main>
    <AppSearch @filterchar="getCharacters" />
    <CharacterList />
    <!--
    <div v-if="store.errormessage">
      <h1> Opps ! Qualcosa è andato storto</h1>
      <p>{{ store.errormessage }}</p>
    </div>
    -->

  </main>

</template>

<script>

// IMPORT
//import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppSearch from './components/AppSearch.vue';
import CharacterList from './components/CharacterList.vue';
//import { store } from './store';

// SCRIPT EXPORT DEFAULT
export default {
  components: {
    AppHeader,
    AppSearch,
    CharacterList,
  },
  data() {
    return {

    }
  },

  methods: {
    getCharacters() {

    },
    created() {
      this.getCharacters();
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
