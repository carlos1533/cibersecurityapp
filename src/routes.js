import LandingPage from './components/marketing/LandingPage'
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import Register from './components/auth/Register'
const routes = [{
    path: '/',
    name: 'home',
    component: LandingPage
}, {
    path: '/login',
    name: 'login',
    component: Login

}, {
    path: '/register',
    name: 'register',
    component: Register
}, {
    path: '/logout',
    name: 'logout',
    component: Logout
}]

export default routes;