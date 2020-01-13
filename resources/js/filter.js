import Vue from 'vue'
// moment js
import moment from 'moment'
Vue.filter('timeformat',(arg)=>{
    return moment(arg).format("MMM Do YYYY")
})
//End Moment Js

//post filter
Vue.filter('sortlength',function (text,length,suffix) {
    return text.substring(0,length)+suffix;
})