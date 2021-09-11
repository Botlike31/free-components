import { createRouter, createWebHashHistory } from "vue-router";
import News from "../views/News.vue";
import FAQ from "../views/FAQ.vue";

const routes = [
  {
    path: "/",
    name: "News",
    component: News
  },
  {
    path: "/faq",
    name: "FAQ",
    component: FAQ
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
