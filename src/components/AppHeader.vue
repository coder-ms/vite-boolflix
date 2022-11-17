<template>
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">BOOLFLIX</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form class="row row-cols-lg-auto g-3 align-items-center" @submit.prevent="searchMovies">
                        <!--SELECT MOVIE OR TV-->
                        <div class="col-12">
                            <label class="visually-hidden" for="searchOptions">Select series</label>
                            <select class="form-select" id="searchOptions" v-model="store.searchSeries">
                                <option selected value="">Choose...</option>
                                <option :value="status" v-for="(status, index) in searchOptions" :key="index">{{ status
                                }}</option>
                            </select>
                        </div>

                        <!-- TITLE FILTER -->
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
            </div>
        </nav>
    </header>


</template>

<script>
import { store } from '../store';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
            searchOptions: [
                'movies',
                'tv series',
            ],
            /*
            SEARCH SERIES OR MOVIE
            search: { series: '',}
             */
        }
    },

    methods: {
        searchMovies() {
            this.$emit('loadMovie');
        },
        resetSearch() {
            store.searchTitleVal = '';
            store.searchSeries = 'movie';
            this.$emit('loadMovie');
        }
    },

    props: {
        title: String
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    background-color: grey;

    .container-fluid {
        .navbar-brand {
            padding: 0 10px;
            background-color: red;
            color: black;
        }
    }
}
</style>
