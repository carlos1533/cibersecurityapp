import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
//axios.defaults.baseURL = 'https://cibersecurityapi.herokuapp.com/users'
axios.defaults.baseURL = "http://localhost:3001/users";

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token") || null,
    respuestareto1: "",
    pokemonSelected: "",
    namePokemonSelected:""
  },
  getters: {
    loggedIn(state) {
      return state.token !== null;
    }
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token;
    },

    destroyToken(state) {
      state.token = null;
    },
    validatePassword(state, respuestareto1) {
      state.respuestareto1 = respuestareto1;
    },
    setPokemonSelected(state, pokemon,namePokemonSelected) {
      state.pokemonSelected = pokemon;
      state.namePokemonSelected = namePokemonSelected;
    }
  },
  actions: {
    setPokemonSelected({ commit }, pokemon,namePokemonSelected) {
      commit("setPokemonSelected", pokemon,namePokemonSelected);
    },
    register(context, data) {
      return new Promise((resolve, reject) => {
        axios
          .post("/registro", {
            name: data.name,
            password: data.password,
            validez: data.validez
          })
          .then(response => {
            console.log(response);
            resolve(response);
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });
      });
    },
    destroyToken(context) {
      if (context.getters.loggedIn) {
        return new Promise(resolve => {
          localStorage.removeItem("token");
          context.commit("destroyToken");
          resolve();
        });
      }
    },
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("/login", {
            name: credentials.name,
            password: credentials.password
          })
          .then(response => {
            const token = response.data.token;
            //console.log(token)
            localStorage.setItem("token", token);

            context.commit("retrieveToken", token);
            resolve(response);
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });
      });
    },
    validatePassword(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("/reto01", { password: credentials.password })
          .then(response => {
            const respuestareto1 = response.data;
            context.commit("validatePassword", respuestareto1);
            resolve(response);
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });
      });
    }
  }
});
