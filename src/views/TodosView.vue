<template>
  <div>
    <div class="card">
      <div class="card-body p-4">
        <h1 class="text-center my-3 pb-3">To Do List</h1>

        <table class="table mb-4">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Todo item</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(todo, index) in todos" :key="todo.id">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ todo.title }}</td>
              <td>
                <button type="button" class="btn btn-danger">Delete</button>
                <button
                  type="button"
                  class="btn btn-success ms-1"
                  @click="handleEdit(todo)"
                >
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <TodosPagination />

    <router-link to="/todo/create">
      <button class="btn btn-primary fabButton">Add</button></router-link
    >
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import TodosPagination from "@/components/TodosPagination.vue";

export default {
  name: "TodosView",
  components: {
    TodosPagination,
  },
  computed: {
    ...mapGetters({
      todos: "TodosList",
    }),
  },

  methods: {
    ...mapActions(["GetTodosListAction"]),

    handleEdit(todo) {
      this.$router.push({ path: "/todo/update", query: { ...todo } });
    },
  },

  created() {
    this.GetTodosListAction();
  },
};
</script>

<style scoped>
.fabButton {
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  width: 5rem;
  height: 5rem;
  border-radius: 50%;
}
.card {
  margin: 2rem;
  border: none !important;
}
</style>
