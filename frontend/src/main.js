import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import LenisVue from 'lenis/vue'

import { createHead } from '@unhead/vue/client'

import '@splinetool/viewer'

const app = createApp(App)
const pinia = createPinia()
const head = createHead()

app.use(pinia)
app.use(router)
app.use(LenisVue)
app.use(head)
app.mount('#app')
