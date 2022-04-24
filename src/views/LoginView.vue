<template>
  <section class="container-fluid h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid"
          alt="Sample image"
        />
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <h1>Login</h1>
        <br />
        <form @submit.prevent="submit">
          <!-- Email input -->
          <div class="form-outline mb-4">
            <input
              type="email"
              id="form3Example3"
              class="form-control form-control-lg"
              placeholder="Enter a valid email address"
              v-model="form.email"
            />
            <label class="form-label" for="form3Example3">Email address</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-3">
            <input
              type="password"
              id="form3Example4"
              class="form-control form-control-lg"
              placeholder="Enter password"
              v-model="form.password"
            />
            <label class="form-label" for="form3Example4">Password</label>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button
              type="submit"
              class="btn btn-primary btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem"
            >
              Login
            </button>
            <p class="small fw-bold mt-2 pt-1 mb-0">
              Don't have an account?
              <router-link to="/signup" class="link-danger"
                >Register</router-link
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "LoginView",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["LoginAction"]),
    async submit() {
      let { email, password } = this.form;
      if (email && password) {
        const resp = await this.LoginAction(this.form);

        if (!resp) {
          alert("Invalid Email or Password"); 
          return;
        }

        this.$router.push("/todos");
      } else {
        alert("Please enter email and password and try again");
      }
    },
  },
};
</script>
