import { createRouter, createWebHistory } from "vue-router";
import portfolio from "@/components/portfolio.vue";
import contact from "@/components/contact.vue";
import profile from "@/components/profile.vue";

const routes = [
  { path: "/", name: "portfolio", component: portfolio },
  { path: "/contact", name: "contact", component: contact },
  { path: "/profile", name: "profile", component: profile }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
