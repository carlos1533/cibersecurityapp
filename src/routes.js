import LandingPage from './components/marketing/LandingPage'
import LandingPage0 from './components/marketing/LandingPage0'
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import Register from './components/auth/Register'
import Nivel1 from './components/Nivel01/Nivel1'
import Tuto from './components/Nivel01/Tuto'
import fight from './components/Nivel01/fight'
import fight2 from './components/Nivel01/fight2'
const routes = [
    {
        path: '/pretuto',
        name: 'pretuto',
        component: LandingPage

    },
    {
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
        path: '/tuto',
        name: 'tuto',
        component: Tuto

    },
    {
        path: '/fight',
        name: 'fight',
        component: fight

    },
    {
        path: '/fight2',
        name: 'fight2',
        component: fight2

    }
]

export default routes;