import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {Quasar} from 'quasar'

import 'quasar/src/css/index.sass'
import { createRouter, createWebHistory } from 'vue-router'

const router= createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('./pages/IndexPage.vue') },
  ]
})

const app = createApp(App)
app.use(Quasar)
app.use(router)

app.mount('#app')
