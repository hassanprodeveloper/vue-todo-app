<template >
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">TODO APP</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav ms-auto" v-if="isLoggedIn">
          <li class="nav-item">
            <router-link class="nav-link" to="/todos">Todos</router-link>
          </li>

          <li class="nav-item">
            <button class="btn btn-primary" v-on:click="logoutHandler">
              Logout
            </button>
          </li>
        </ul>

        <ul class="navbar-nav ms-auto" v-else>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/signup">Sign up</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "NavbarComponent",

  computed: {
    ...mapGetters({ User: "StateUser" }),

    isLoggedIn: function () {
      return this.$store.getters.isAuthenticated;
    },
  },

  methods: {
    ...mapActions(["LogoutAction"]),

    async logoutHandler() {
      const response = await this.LogoutAction();

      if (!response) {
        alert("Something went wrong, please try again");
        return;
      }

      this.$router.push("/");
    },
  },
};
</script>
 