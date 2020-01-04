/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


require('./bootstrap');

window.Vue = require('vue');


// Start Vuex

import Vuex from 'vuex'

Vue.use(Vuex)
import storeData from "./store/index"
const store=new Vuex.Store(
    storeData
)
// End Vuex


// start for vue route
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import {routes} from "./route";
// End for vue route

//Start for vuejs vform for form validation
import { Form, HasError, AlertError } from 'vform'
window.Form=Form
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
//End for vuejs vform for form validation

// sweet alert2
import Swal from 'sweetalert2'
window.swal=Swal

const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

window.toast=toast

//End sweet alert2




Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-master', require('./components/admin/AdminMaster.vue').default);

const router=new VueRouter({
    routes,
    mode: 'hash'
})


const app = new Vue({
    // ekhane sob constant declare korte hobe declare korle constant ti sob jayga theke kaj korbe
    el: '.app',
    router,
    store

});
