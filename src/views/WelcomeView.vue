<template>
  <div class="d-flex justify-content-center align-items-center flex-column h-100">
    <h1>Welcome</h1>
    <h3>{{ this.$store.state.auth.user?.email }}</h3>
  </div>
</template>

<script>
export default {
  name: "WelcomeView",

  methods: {
    check() {
      console.log(this.$store.state.auth);
    },
  },
};
</script>
