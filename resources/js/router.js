import Vue from 'vue'

import Router from 'vue-router'


Vue.use(Router)


const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./pages/Home')
    }
]

export default new Router({
    mode: 'history',
    routes
})
