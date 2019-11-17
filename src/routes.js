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
        path: '/videoGamePlay1',
        name: 'videoGamePlay1',
        component: () => import('./pages/game/videoGamePlay1')  
    },
    {
        path: '/videoGamePlay2',
        name: 'videoGamePlay2',
        component: () => import('./pages/game/videoGamePlay2')  
    },
    {
        path: '/videoGamePlay3',
        name: 'videoGamePlay3',
        component: () => import('./pages/game/videoGamePlay3')  
    },
    {
        path: '/videoGamePlay4',
        name: 'videoGamePlay4',
        component: () => import('./pages/game/videoGamePlay4')  
    },
    {
        path: '/videoGamePlay5',
        name: 'videoGamePlay5',
        component: () => import('./pages/game/videoGamePlay5')  
    },
    {
        path: '/videoGamePlay6',
        name: 'videoGamePlay6',
        component: () => import('./pages/game/videoGamePlay6')  
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

    },
    {
        path: 'errorFacil',
        name: 'errorFacil',
        component: () => import('./pages/game/errorFacil')
    },
    {
        path: 'iframe',
        name: 'iframe',
        component: () => import('./pages/game/iframe'),
        props: true
    }
]

export default routes;