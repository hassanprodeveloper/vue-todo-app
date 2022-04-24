<template >
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-light" style="border-radius: 1rem">
          <div class="card-body p-5 text-center">
            <h2 class="fw-bold mb-2 text-uppercase">{{ pageTitle }} Todo</h2>
            <p class="mb-5">Please enter title and description</p>

            <div class="form-outline form-white mb-4">
              <input
                type="text"
                id="TitleInput"
                class="form-control form-control-lg"
                v-model="todo.title"
              />
              <label class="form-label" for="TitleInput"><h4>Title</h4></label>
            </div>

            <div class="form-outline form-white mb-4">
              <textarea
                id="descriptionInput"
                class="form-control form-control-lg"
                rows="3"
                v-model="todo.description"
              />
              <label class="form-label" for="descriptionInput">
                <h4>Description</h4>
              </label>
            </div>

            <button
              @click="handleSubmitClick"
              class="btn btn-primary btn-lg px-5 text-capitalize"
            >
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                v-if="loading"
              />

              {{ pageTitle }}
            </button>
          </div>
          <button @click="handleCancel" type="button" class="btn btn-link mb-4">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CreateTodo",
  data() {
    return {
      pageTitle: "",
      todo: {
        title: "",
        description: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      loading: "Loading",
    }),
  },
  methods: {
    ...mapActions(["CreateTodoAction", "UpdateTodoAction"]),

    async handleSubmitClick() {
      let { title, description } = this.todo;
      if (title && description) {
        let response;

        if (this.pageTitle === "create") {
          response = await this.CreateTodoAction(this.todo);
        }

        if (this.pageTitle === "update") {
          response = await this.UpdateTodoAction(this.todo);
        }

        if (!response) {
          alert("Something went wrong, please try again");
          return;
        }

        this.$router.push("/todos");
      } else {
        alert("Please fill all fields");
      }
    },

    handleCancel() {
      let { title, description } = this.todo;
      let confirmation = true;

      if (title || description)
        confirmation = confirm("By Canceling you may lose your updates.");

      if (confirmation) this.$router.back();
    },
  },

  created() {
    this.pageTitle = this.$route.params.handler || "create";
    this.todo = this.$route.query || {};
  },
};
</script>
 
 <style>
#descriptionInput {
  resize: none;
}
</style>