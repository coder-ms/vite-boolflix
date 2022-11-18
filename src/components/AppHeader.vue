<template>
    <header>
        <nav class="navBar col-12 col-lg-12 col-md-12 col-sm-12">
            <div class="boolflixMenu col-8 col-lg-8 col-md-8 col-sm-8">
                <div class="col-6 col-lg-6 col-md-6 col-sm-6">
                    <ul>
                        <li><a class="navbarBrand" href="#">BOOLFLIX</a></li>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </div>
            </div>
            <div class="navbarCollapse col-4 col-lg-4 col-md-4 col-sm-4" id="navbarSupportedContent">
                <form class="row row-cols-lg-auto g-3 align-items-center" @submit.prevent="searchMovies">
                    <!--SELECT MOVIE OR TV-->
                    <div class="col-12 col-lg-5 col-md-4 col-sm-4">
                        <label class="visually-hidden" for="searchOptions">Select series</label>
                        <select class="form-select" id="searchOptions" v-model="store.searchSeries">
                            <option selected value="">Choose...</option>
                            <option :value="status" v-for="(status, index) in searchOptions" :key="index">{{ status
                            }}</option>
                        </select>
                    </div>

                    <!-- TITLE FILTER -->
                    <div class="col-12 col-lg-5 col-md-4 col-sm-4">
                        <label class="visually-hidden" for="charactername">Search name</label>
                        <input type="text" class="form-control" id="charactername" placeholder="Search name"
                            v-model.trim="store.searchTitleVal">
                    </div>

                    <!--BUTTON SUBMIT-->
                    <div class="col-12 col-lg-1 col-md-2 col-sm-2">
                        <button type="submit" class="searchButton">&#x1f50e;</button>
                    </div>

                    <!--BUTTON RESET-->
                    <div class="col-12 col-lg-1 col-md-2 col-sm-2">
                        <button type="reset" class="resetButton" @click="resetSearch">&#8634;</button>
                    </div>
                </form>
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
.navBar {
    background-color: rgb(27, 25, 25);
    display: flex;
    height: 60px;
    padding: 10px;

    .boolflixMenu {
        display: flex;
        align-items: center;


        div {

            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;



                li {
                    display: inline;
                    margin-left: 6px;

                    &:first-child {
                        background-color: red;
                        padding: 10px;
                    }

                    a {
                        text-decoration: none;

                        &:first-child {
                            font-weight: 800;
                            color: white;
                        }

                        color: black;
                        font-weight: 600;
                        font-size: 14px;
                    }

                }
            }
        }



    }

    .navbarCollapse {
        form {
            div {

                .searchButton {
                    border: none;
                    border-radius: 40%;
                    margin: 0 5px;
                    background-color: black;
                    color: white;
                    border: 1px solid grey;
                }
            }

            div {

                .resetButton {
                    border: none;
                    border-radius: 50%;
                    margin: 0 5px;
                    background-color: black;
                    color: white;
                    border: 1px solid grey;
                }
            }
        }
    }
}
</style>
