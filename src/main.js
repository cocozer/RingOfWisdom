import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from './router.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)


const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')

