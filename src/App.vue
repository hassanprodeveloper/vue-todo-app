<template>
  <div>
    <Navbar />
    <nav>
      <router-link to="/">Welcome</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/todos">Todos</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "AppView",
  components: {
    Navbar,
  },
};
</script>
