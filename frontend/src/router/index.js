import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/makanan",
    name: "makanan",
    component: () => import("../views/MakananListView.vue"),
  },
  {
    path: "/addMakanan",
    name: "addMakanan",
    component: () => import("../views/AddMakanan.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
