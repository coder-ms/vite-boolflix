<template>
    <div class="container">
        <!--FORM-->
        <form class="row row-cols-lg-auto g-3 align-items-center" @submit.prevent="searchMovies">
            <div class="col-12">
                <label class="visually-hidden" for="charactername">Search name</label>
                <input type="text" class="form-control" id="charactername" placeholder="Search name"
                    v-model.trim="store.searchTitleVal">
            </div>

            <!--BUTTON SUBMIT-->
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Search</button>
            </div>

            <!--BUTTON RESET-->
            <div class="col-12">
                <button type="reset" class="btn btn-primary" @click="resetSearch">Reset</button>
            </div>
        </form>
    </div>

</template>

<script>
import { store } from '../store';

export default {
    name: 'MovieSearch',
    data() {
        return {
            store,

        }
    },
    methods: {
        searchMovies() {
            this.$emit('loadMovie');
        },
        resetSearch() {
            store.searchTitleVal = '';
            this.$emit('loadMovie');
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;

    form {
        justify-content: space-between;
    }
}
</style>

