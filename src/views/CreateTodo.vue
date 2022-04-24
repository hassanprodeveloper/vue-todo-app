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

            <button class="btn btn-primary btn-lg px-5 text-capitalize">
              {{ pageTitle }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  created() {
    this.pageTitle = this.$route.params.handler || "Create";

    this.todo = this.$route.query || {};
  },
};
</script>
 
 <style>
#descriptionInput {
  resize: none;
}
</style>