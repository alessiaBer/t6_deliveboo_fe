import { createRouter, createWebHistory } from "vue-router";

// IMPORTO I COMPONENTI
/* import AppHome from './pages/AppHome.vue'; */

const router = createRouter({
    history: createWebHistory(),
    routes: [
        //specifichiamo le rotte
        /* {
            path: '/',
            name: 'home',
            component: AppHome
        }, */
    ]
});

export { router };