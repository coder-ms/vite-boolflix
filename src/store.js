import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({
    loading: false,
    actualEndpoint: '',
    movieList: [],
    //
    searchLanguageVal: 'it',
    searchTitleVal: 'a',
    searchSeries: 'movies',


    // PATH MOVIE & TV URL 
    apiURL: 'https://api.themoviedb.org/3/',

    searchEndpoint: ['search/tv', 'search/movie'],

    // PATH IMG URL 
    pathImgURL: 'https://image.tmdb.org/t/p/w342/',
    //FLAGS API
    flagsAPIurl: 'https://countryflagsapi.com/png/',
    //flagEmpty: '../assets/img/emptyFlag.png',
    flagEmpty: 'https://countryflagsapi.com/png/aq',


    movieLoad(requestEndpoint) {
        this.loading = true;
        this.actualEndpoint = requestEndpoint;
        if ('' == this.searchTitleVal) this.searchTitleVal = 'a';
        let movieFilter = {
            params: {
                api_key: 'da05c2e37d45ba76e82df41389aebb58',
                language: this.searchLanguageVal,
                query: this.searchTitleVal,
            }
        }
        let apiEndPoint = this.apiURL + requestEndpoint;
        console.log('language = ' + this.searchLanguageVal);
        console.log('query = ' + this.searchTitleVal);
        console.log('requestEndpoint = ' + requestEndpoint);
        console.log('movieFilter.params = ' + movieFilter.params);
        //
        axios.get(apiEndPoint, movieFilter).then((res) => {
            this.movieList = [...res.data.results];
            // console.log('movieList[] = ' + this.movieList);
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
        let flag = '';
        let rtnFlag = this.flagEmpty;

        if (flagReq == 'uk') flag = 'gb';
        if (flagReq == 'en') flag = 'us';
        if (flagReq == 'es') flag = 'es';
        if (flagReq == 'fr') flag = 'fr';
        if (flagReq == 'US') flag = 'us';
        if (flagReq == 'de') flag = 'de';
        if (flagReq == 'it') flag = 'it';

        if ('' != flag) rtnFlag = this.flagsAPIurl + flag;

        return rtnFlag;
    }
});