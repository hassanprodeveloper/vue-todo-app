<template >
  <div class="d-flex justify-content-center align-items-center paginationContainer">
    <nav aria-label="...">
      <ul class="pagination">
        <li
          v-for="page in pagination"
          :key="page.label"
          v-bind:class="page.url ? 'page-item' : 'page-item disabled'"
        >
          <a class="page-link" href="#">{{ page.label }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "TodosPagination",
  computed: {
    ...mapGetters({
      pagination: "Pagination",
    }),
  },
};
</script>
 
 <style>
.paginationContainer {
  width: 100%;
  margin: 2rem 0px;
}
</style>