import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2/';

export default {
    install(Vue) {
        Vue.prototype.axios = axios;
        Vue.prototype.baseUrl = baseUrl;
    }
}
