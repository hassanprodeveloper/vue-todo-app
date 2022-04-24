<template>
  <div style="position: relative; padding: 5rem">
    <div class="card">
      <div class="card-body p-4">
        <h1 class="text-center my-3 pb-3">To Do List</h1>

        <table v-if="todos.length > 0" class="table mb-4">
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
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="handleDelete(todo.id)"
                >
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    v-if="deletePressed.includes(todo.id)"
                  />
                  Delete
                </button>

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

        <h4 v-else>
          Add your first todo by pressing the add button at bottom right corner
        </h4>
      </div>
    </div>

    <span v-if="todos.length > 1">
      <TodosPagination />
    </span>

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

  data() {
    return {
      deletePressed: [],
    };
  },

  methods: {
    ...mapActions(["GetTodosListAction", "DeleteTodoAction"]),

    handleEdit(todo) {
      this.$router.push({ path: "/todo/update", query: todo });
    },

    async handleDelete(id) {
      let confirmation = confirm("Do you want to delete todo permanently?");

      if (!confirmation) return;

      this.deletePressed = [id, ...this.deletePressed];

      const response = await this.DeleteTodoAction(id);

      this.deletePressed = this.deletePressed.filter((e) => e !== id);

      if (!response) {
        alert("Something went wrong, please try again.");
        return;
      }
    },
  },

  created() {
    this.GetTodosListAction();
  },
};
</script>

<style scoped>
.fabButton {
  position: fixed;
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
