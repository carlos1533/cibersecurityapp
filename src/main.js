import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Master from './components/layouts/Master'
import store from './store/store'
import VeeValidate from 'vee-validate'
import vSelect from 'vue-select'
import CxltToastr from 'cxlt-vue2-toastr'

const toastrConfigs = {
    position: 'bottom right',
    showDuration: 2000,
    timeOut: 5000,
    progressBar: true
}

Vue.config.productionTip = false
Vue.use(CxltToastr, toastrConfigs)
Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.component('v-select', vSelect)
const router = new VueRouter({ routes, mode: 'history' })
new Vue({
    router,
    store,
    render: h => h(Master)
}).$mount('#app')