import React from 'react'
import {render} from 'react-dom'
import AppRouter from './router'
import * as Stores from './stores/index'
import 'react-id-swiper/src/styles/css/swiper.css'
import './style/customized.css'

let stores = {
    nav: new Stores.Nav(),
    pic: new Stores.Pic(),
}

window.addEventListener('load', () => {
    render(AppRouter(stores), document.getElementById('root'))
})



