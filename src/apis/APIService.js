import axios from 'axios';
const API_URL = '';
// const API_URL = '';

// IE 11 caches all ajax get requests...this messes with application state. The only work around for it
// when the browser 'Check for newer page version' setting is set to 'Automatically' is to force IE not to cache
// https://github.com/axios/axios/issues/297
axios.defaults.headers.get['Pragma'] = 'no-cache';
axios.defaults.headers.get['Cache-Control'] = 'no-cache, no-store';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export class APIService{

    constructor(){
    }

}
