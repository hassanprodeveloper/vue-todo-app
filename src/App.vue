<template>
  <div>
    <Navbar />

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

<style >
a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  color: inherit;
  text-decoration: none;
}
</style>
