<template>
  <div>
    <Navbar />
    <div class="h-custom">
      <router-view />
    </div>
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
.h-custom {
  height: calc(100vh - 60px);
}
a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  color: inherit;
  text-decoration: none;
}
</style>
