import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({
    loading: false,
    actualEndpoint: '',
    movieList: [],
    //
    searchLanguageVal: 'it',
    searchLanguageKey: 'language=',
    searchTitleVal: 'a',
    searchTitleKey: 'query=',

    // PATH MOVIE & TV URL 
    apiURL: 'https://api.themoviedb.org/3/',

    searchEndpoint: ['tv/search', 'movie/search'],
    trendingEndpoint: ['tv/popular', 'movie/popular'],

    // PATH IMG URL 
    pathImgURL: 'https://image.tmdb.org/t/p/w342/',
    //FLAGS API
    flagsAPIurl: 'https://countryflagsapi.com/png/',


    movieLoad(requestEndpoint) {
        this.loading = true;
        this.actualEndpoint = requestEndpoint;
        let searchQuery = this.searchLanguageKey + this.searchLanguageVal + '&' + this.searchTitleKey + this.searchTitleVal;
        let movieFilter = {
            params: {
                api_key: 'da05c2e37d45ba76e82df41389aebb58',
                query: searchQuery
            }
        }
        let apiEndPoint = this.apiURL + requestEndpoint;
        console.log('searchQuery = ' + searchQuery);
        console.log('apiEndPoint = ' + apiEndPoint);
        console.log('movieFilter.params = ' + movieFilter.params);
        //
        axios.get(apiEndPoint, movieFilter).then((res) => {
            this.movieList = [...res.data.results];
            console.log('movieList[] = ' + this.movieList);
            this.loading = false;
        })
    },
    tvLoad(requestEndpoint) {
        this.loading = true;
        this.actualEndpoint = requestEndpoint;
        let searchQuery = this.searchLanguageKey + this.searchLanguageVal + '&' + this.searchTitleKey + this.searchTitleVal;
        let movieFilter = {
            params: {
                api_key: 'da05c2e37d45ba76e82df41389aebb58',
                query: searchQuery
            }
        }
        let apiEndPoint = this.apiURL + requestEndpoint;
        console.log('searchQuery = ' + searchQuery);
        console.log('apiEndPoint = ' + apiEndPoint);
        console.log('movieFilter.params = ' + movieFilter.params);
        //
        axios.get(apiEndPoint, movieFilter).then((res) => {
            this.movieList = [...res.data.results];
            console.log('movieList[] = ' + this.movieList);
            this.loading = false;
        })
    },

    getFlagImg(flagReq) {
        let flag = 'it';
        flagReq == 'uk' ? flag = 'gb' : '';
        flagReq == 'en' ? flag = 'us' : '';
        return this.flagsAPIurl + flag;
    }

});