import './app/assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app/App.vue'
import router from './app/router'

const app = createApp(App)


import { NCall, NMail, NUnion } from "@/shared";


// shared
app.component('NCall', NCall)
app.component('NMail', NMail)
app.component('NUnion', NUnion)

app.use(createPinia())
app.use(router)

app.mount('#app')
