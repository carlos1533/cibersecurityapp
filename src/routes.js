import Nivel1 from './components/Nivel01/Nivel1'
import Tuto from './components/Nivel01/Tuto'
import fight from './components/Nivel01/fight'
import fight2 from './components/Nivel01/fight2'
const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('./pages/auth/Login')

    },
    {
        path: '/pretuto',
        name: 'pretuto',
        component: () => import('./pages/marketing/LandingPage')

    },
    {
        path: '/menu',
        name: 'menu',
        component: () => import('./pages/game/Menu')  
    },
    {
        path: '/memoria',
        name: 'memoria',
        component: () => import('./pages/game/MemoriaFacil')  
    },
    {
        path: '/memoriaintermedio',
        name: 'memoriaintermedio',
        component: () => import('./pages/game/MemoriaIntermedio')  
    },
    {
        path: '/memoriadificil',
        name: 'memoriadificil',
        component: () => import('./pages/game/MemoriaDificil')  
    },
    {
        path: '/videoGame',
        name: 'videoGame',
        component: () => import('./pages/game/videoGame')  
    },
    {
        path: '/videoGamePlay',
        name: 'videoGamePlay',
        component: () => import('./pages/game/videoGamePlay')  
    },
    {
        path: '/landinpage0',
        name: 'home0',
        component: () => import('./pages/marketing/LandingPage0')

    }, 
    {
        path: '/register',
        name: 'register',
        component: () => import('./pages/auth/Register')
    }, {
        path: '/logout',
        name: 'logout',
        component: () => import('./pages/auth/Logout')
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