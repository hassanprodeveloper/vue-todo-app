import { createRouter, createWebHistory } from "vue-router";

import store from "@/store";

import LoginView from "@/views/LoginView";
import SignupView from "@/views/SignupView";
import WelcomeView from "@/views/WelcomeView";
import TodosView from "@/views/TodosView";
import CreateTodo from "@/views/CreateTodo";

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
  {
    path: "/todo/:handler",
    name: "CreateTodo",
    component: CreateTodo,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/todos");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;
