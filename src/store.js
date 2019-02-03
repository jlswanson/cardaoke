import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

const state = new Vuex.Store({
    actions: {
        getCards() {
            axios.get('/api/v1/card').then(function(response) {
                console.log(response);
            });
        }
    }
});