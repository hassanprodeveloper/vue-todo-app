<template >
  <div
    class="d-flex justify-content-center align-items-center paginationContainer"
  >
    <nav aria-label="...">
      <ul class="pagination">
        <li
          v-for="page in pagination"
          :key="page.label"
          v-bind:class="page.url ? 'page-item' : 'page-item disabled'"
        >
          <button
            @click="handlePaginationButtonClick(page.url)"
            v-bind:class="`page-link ${
              current_page == page.label && 'bg-warning'
            }`"
          >
            {{ page.label }}
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TodosPagination",
  computed: {
    ...mapGetters({
      pagination: "Pagination",
      current_page: "CurrentPage",
    }),
  },

  methods: {
    ...mapActions(["GetTodosPaginationDataAction"]),

    async handlePaginationButtonClick(URL) {
      await this.GetTodosPaginationDataAction(URL);
    },
  },
};
</script>
 
 <style>
.paginationContainer {
  width: 100%;
  margin: 2rem 0px;
}
</style>