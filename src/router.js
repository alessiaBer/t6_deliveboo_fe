import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "./views/WelcomeView.vue";
import HomeView from "./views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: WelcomeView,
    },
    {
        path: "/home",
        name: "home",
        component: HomeView,
      },
  ],
});

export { router };
