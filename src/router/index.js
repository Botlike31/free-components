import { createRouter, createWebHashHistory } from "vue-router";
import News from "../views/News.vue";

const routes = [
  {
    path: "/news",
    name: "News",
    component: News
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
