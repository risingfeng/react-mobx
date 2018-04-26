import * as Pages from './pages/index'

const routes = [{
    path: '/',
    component: Pages.Nav
}, {
    path: '/nav',
    component: Pages.Nav,
    childRoutes: [{}],
}, {
    path: '/faq',
    component: Pages.Faq
}]

export default routes