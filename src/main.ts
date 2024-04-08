import './app/assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app/App.vue'
import router from './app/router'

const app = createApp(App)

import { NRoomClass, NRoomInfo } from "@/features";

import { NRoom, NAboutUs } from "@/widgets";

import { NButton, NStar, NClass, NCall, NMail, NUnion, NRoomName, NRoomDescription, NPaginationImg } from "@/shared";


// shared
app.component('NButton', NButton)
app.component('NClass', NClass)
app.component('NStar', NStar)
app.component('NCall', NCall)
app.component('NMail', NMail)
app.component('NUnion', NUnion)
app.component('NRoomName', NRoomName)
app.component('NRoomDescription', NRoomDescription)
app.component('NPaginationImg', NPaginationImg)



// features
app.component('NRoomClass', NRoomClass)
app.component('NRoomInfo', NRoomInfo)


// widgets
app.component('NRoom', NRoom)
app.component('NAboutUs', NAboutUs)


app.use(createPinia())
app.use(router)

app.mount('#app')
