import React from 'react'
import {render} from 'react-dom'
import AppRouter from './router'
import * as Stores from './stores/index'

let stores = {
    nav: new Stores.Nav()
}

window.addEventListener('load', () => {
    render(AppRouter(stores), document.getElementById('root'))
})



