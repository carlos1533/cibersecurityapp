import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VuexPersist from 'vuex-persist';
const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage
})
Vue.use(Vuex);
axios.defaults.baseURL = 'https://cibersecurityapi.herokuapp.com/users'
//axios.defaults.baseURL = "http://localhost:3001/users";
export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token") || null,
    respuestareto1: "",
    pokemonSelected: "",
    namePokemonSelected:"",
    customer:{
      scoreMemory: 0,
      scorevideo01:0,
      scorevideo02:0,
      scorevideo03:0,
      scorevideo04:0,
      scorevideo05:0,
      scorevideo06:0,
      scorePokemon: 0,
      scoreError:0,
      totalScore: 0,
      memorygame:false,
      pokemongame:false,
      errorgame:false,
      video01:false,
      video02:false,
      video03:false,
      video04:false,
      video05:false,
      video06:false
    }
  },
  getters: {
    loggedIn(state) {
      return state.token !== null;
    },
    hasPlayedMemory(state) {
      return state.customer.memorygame;
    },
    hasPlayedPokemom(state) {
      return state.customer.pokemongame;
    },
    hasPlayedError(state) {
      return state.customer.errorgame;
    },
    hasPlayedVideo1(state) {
      return state.customer.video01;
    },
    hasPlayedVideo2(state) {
      return state.customer.video02;
    },
    hasPlayedVideo3(state) {
      return state.customer.video03;
    },
    hasPlayedVideo4(state) {
      return state.customer.video04;
    },
    hasPlayedVideo5(state) {
      return state.customer.video05;
    },
    hasPlayedVideo6(state) {
      return state.customer.video06;
    },
    customerTotalScore(state) {
      // return state.customer.scoreError
      return state.customer.scoreMemory + state.customer.scorePokemon + state.customer.scoreError +
      state.customer.scorevideo01 + state.customer.scorevideo02 + state.customer.scorevideo03
      + state.customer.scorevideo04 + state.customer.scorevideo05 + state.customer.scorevideo06;
    }
  },
  mutations: {
    setCustomerScore(state, data){
      state.customer.scoreMemory= data
    },
    resetState (state) {

      Object.assign(state,{
        token: localStorage.getItem("token") || null,
        respuestareto1: "",
        pokemonSelected: "",
        namePokemonSelected:"",
        customer:{
          scoreMemory: 0,
          scorevideo01:0,
          scorevideo02:0,
          scorevideo03:0,
          scorevideo04:0,
          scorevideo05:0,
          scorevideo06:0,
          scorePokemon: 0,
          scoreError:0,
          totalScore: 0,
          memorygame:false,
          pokemongame:false,
          errorgame:false,
          video01:false,
          video02:false,
          video03:false,
          video04:false,
          video05:false,
          video06:false
      }})
    },
    
    setCustomerScoreE(state, data){
      state.customer.scoreError= data
    },
    setCustomerScorePokemon(state, data){
      state.customer.scorePokemon= data
    },
    retrieveToken(state, token) {
      state.token = token;
    },
    destroyToken(state) {
      state.token = null;
    },
    setHasPlayedMemory(state,data){
      state.customer.memorygame = data
    },
    setHasPlayedPokemon(state,data){
      state.customer.pokemongame = data
    },
    setHasPlayedError(state,data){
      state.customer.errorgame = data
    },
    setCustomerScoreVideo01(state, data){
      state.customer.scorevideo01= data
    },
    setCustomerScoreVideo02(state, data){
      state.customer.scorevideo02= data
    },
    setCustomerScoreVideo03(state, data){
      state.customer.scorevideo03= data
    },
    setCustomerScoreVideo04(state, data){
      state.customer.scorevideo04= data
    },
    setCustomerScoreVideo05(state, data){
      state.customer.scorevideo05= data
    },
    setCustomerScoreVideo06(state, data){
      state.customer.scorevideo06= data
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
    setCustomerScore({commit}, data){
      commit('setCustomerScore', data)
    },
    resetState ({commit},data){
      commit('resetState',data)
    },
    setCustomerScorePokemon({commit}, data){
      commit('setCustomerScorePokemon', data)
    },
    setHasPlayedMemory({commit},data){
      commit('setHasPlayedMemory', data)
    },
    setHasPlayedPokemon({commit},data){
      commit('setHasPlayedPokemon', data)
    },
    setHasPlayedError({commit}, data){
      commit('setHasPlayedError', data)
    },
    setCustomerScoreE({commit}, data){
      commit('setCustomerScoreE', data)
    },
    setCustomerScoreVideo01({commit}, data){
      commit('setCustomerScoreVideo01', data)
    },
    setCustomerScoreVideo02({commit}, data){
      commit('setCustomerScoreVideo02', data)
    },
    setCustomerScoreVideo03({commit}, data){
      commit('setCustomerScoreVideo03', data)
    },
    setCustomerScoreVideo04({commit}, data){
      commit('setCustomerScoreVideo04', data)
    },
    setCustomerScoreVideo05({commit}, data){
      commit('setCustomerScoreVideo05', data)
    },
    setCustomerScoreVideo06({commit}, data){
      commit('setCustomerScoreVideo06', data)
    },
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
  },
  plugins: [vuexPersist.plugin]
});
