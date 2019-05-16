import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Master from './components/layouts/Master'
import store from './store/store'

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({ routes, mode: 'history' })
new Vue({
    router,
    store,
    render: h => h(Master)
}).$mount('#app')