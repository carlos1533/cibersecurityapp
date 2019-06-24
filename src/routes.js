import LandingPage from './components/marketing/LandingPage'
import LandingPage0 from './components/marketing/LandingPage0'
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import Register from './components/auth/Register'
import Nivel1 from './components/Nivel01/Nivel1'
import Reto01 from './components/Nivel01/Reto01'
import fight from './components/Nivel01/fight'
const routes = [
    {
        path: '/landinpage',
        name: 'home',
        component: LandingPage
    }, {
        path: '/landinpage0',
        name: 'home0',
        component: LandingPage0

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

    },
    {
        path: '/fight',
        name: 'fight',
        component: fight

    }
]

export default routes;