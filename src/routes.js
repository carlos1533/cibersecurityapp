import LandingPage from './components/marketing/LandingPage'
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import Register from './components/auth/Register'
import Nivel1 from './components/Nivel01/Nivel1'
import Reto01 from './components/Nivel01/Reto01'
const routes = [
    {
        path: '/landinpage',
        name: 'home',
        component: LandingPage
    }, {
        path: '/',
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
    }, {
        path: '/nivel1',
        name: 'nivel1',
        component: Nivel1

    }, {
        path: '/reto1',
        name: 'reto1',
        component: Reto01

    }
]

export default routes;