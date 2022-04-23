import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView";
import SignupView from "@/views/SignupView";
import WelcomeView from "@/views/WelcomeView";
import TodosView from "@/views/TodosView";

const routes = [
  {
    path: "/",
    name: "welcome",
    component: WelcomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: { guest: true },
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
    meta: { guest: true },
  },
  {
    path: "/todos",
    name: "todos",
    component: TodosView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: "history",
});

export default router;
