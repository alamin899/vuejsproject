import Vue from 'vue'
// moment js
import moment from 'moment'
Vue.filter('timeformat',(arg)=>{
    return moment(arg).format("MMM Do YYYY")
})
//End Moment Js