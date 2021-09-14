import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'

const feather = require('feather-icons')
feather.replace()

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')

const appThem = localStorage.getItem('theme')

if (appThem === 'dark' &&
  document.querySelector('body').classList.contains('app-theme')
) {
  document.querySelector('body').classList.add('bg-primary-dark')
} else {
  document.querySelector('body').classList.add('bg-secondary-light')
}
