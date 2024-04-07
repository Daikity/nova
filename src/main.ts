import './app/assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app/App.vue'
import router from './app/router'

const app = createApp(App)

import { NRoomClass } from "@/features";

import { NButton, NStar, NClass, NCall, NMail, NUnion } from "@/shared";


// shared
app.component('NButton', NButton)
app.component('NClass', NClass)
app.component('NStar', NStar)
app.component('NCall', NCall)
app.component('NMail', NMail)
app.component('NUnion', NUnion)


// features
app.component('NRoomClass', NRoomClass)

app.use(createPinia())
app.use(router)

app.mount('#app')
