import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import LenisVue from 'lenis/vue'
import { createHead } from '@unhead/vue/client'

import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'

// Get saved locale from localStorage or default to 'en'
const savedLocale = localStorage.getItem('locale') || 'en'

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'en',
  messages: {
    en,
    fr,
  },
})

// Set initial HTML lang attribute
document.documentElement.lang = savedLocale


import '@splinetool/viewer'

const app = createApp(App)
const pinia = createPinia()
const head = createHead()

app.use(pinia)
app.use(router)
app.use(LenisVue)
app.use(head)
app.use(i18n)
app.mount('#app')
