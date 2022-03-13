/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import App from "./layout/App";
import VueI18n from 'vue-i18n'

require('./bootstrap');
import VueLazyload from 'vue-lazyload'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Notifications from 'vue-notification'
window.Vue = require('vue').default;


import store from "./store";
import router from "./router";

import '../sass/app.scss'
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(VueI18n)

const messages =
    {
        en: require('./lang/en').default,
        ru: require('./lang/ru').default
    }



// import $ from 'jquery/dist/jquery'
import 'bootstrap/dist/css/bootstrap.css'
import VueParticles from 'vue-particles'
import 'vue2-animate/dist/vue2-animate.css'
import 'slick-carousel/slick/slick.css'

const i18n = new VueI18n({
    locale: 'en', // set locale
    messages, // set locale messages
})

Vue.use(VueParticles)
Vue.use(VueLazyload)
Vue.use(VueAxios, axios)
Vue.use(Notifications)


axios.defaults.baseURL = '/api';


import middleware from "@grafikri/vue-middleware"

router.beforeEach(middleware({ store }))

const app = new Vue({
    el: '#app',
    store,
    router,
    i18n,
    render: h => h(App)
});
