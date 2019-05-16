import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
axios.defaults.baseURL = 'http://localhost:3000/users'

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('token') || null
    },
    getters: {
        loggedIn(state) {
            return state.token !== null
        }
    },
    mutations: {
        retrieveToken(state, token) {
            state.token = token
        },

        destroyToken(state) {
            state.token = null
        }
    },
    actions: {
        register(context, data) {

            return new Promise((resolve, reject) => {
                axios
                    .post('/registro', {
                        name: data.name,
                        email: data.email,
                        password: data.password
                    })
                    .then(response => {
                        console.log(response)
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        destroyToken(context) {

            if (context.getters.loggedIn) {
                return new Promise((resolve, reject) => {
                    axios
                        .post('/logout')
                        .then(response => {
                            localStorage.removeItem('token')
                            context.commit('destroyToken')
                            resolve(response)

                        })
                        .catch(error => {
                            localStorage.removeItem('token')
                            context.commit('destroyToken')
                            reject(error)
                        })
                })
            }
        },
        retrieveToken(context, credentials) {

            return new Promise((resolve, reject) => {
                axios
                    .post('/login', {
                        email: credentials.email,
                        password: credentials.password

                    })
                    .then(response => {

                        const token = response.data.token

                        localStorage.setItem('token', token)

                        context.commit('retrieveToken', token)
                        resolve(response)
                    })
                    .catch(error => {
                        console.log(error)
                        reject(error)
                    })
            })
        }
    }
})