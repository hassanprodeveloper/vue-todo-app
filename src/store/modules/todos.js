import { todo, todosList } from "@/constants/api";
import {
  deleteData,
  getData,
  getDataWithCustomURL,
  postFormData,
  putData,
} from "@/lib/axios";

const state = {
  current_page: 1,
  loading: false,
  data: [],
  links: [],
};

const getters = {
  TodosList: (state) => state.data,
  Pagination: (state) => state.links,
  Loading: (state) => state.loading,
  CurrentPage: (state) => state.current_page,
};

const actions = {
  async GetTodosListAction({ commit, dispatch }) {
    const response = await getData(todosList);

    if (response === "Unauthorized") {
      await dispatch("auth/LogoutAction", null, { root: true });
      return;
    }
    if (!response) return false;

    await commit("setData", response.items.data);
    await commit("setLinks", response.items.links);
    await commit("setCurrentPage", response.items.current_page);

    return true;
  },

  async GetTodosPaginationDataAction({ commit, dispatch }, URL) {
    const response = await getDataWithCustomURL(URL);

    if (response === "Unauthorized") {
      await dispatch("auth/LogoutAction", null, { root: true });
      return;
    }
    if (!response) return false;

    await commit("setData", response.items.data);
    await commit("setLinks", response.items.links);
    await commit("setCurrentPage", response.items.current_page);

    return true;
  },

  async CreateTodoAction({ commit, dispatch }, form) {
    let { title, description } = form;

    let Todo = new FormData();
    Todo.append("title", title);
    Todo.append("description", description);

    await commit("setLoading", true);

    const response = await postFormData(todo, Todo);

    await commit("setLoading", false);

    if (response === "Unauthorized") {
      await dispatch("auth/LogoutAction", null, { root: true });
      return;
    }
    if (!response) return false;

    return true;
  },

  async UpdateTodoAction({ commit, dispatch }, form) {
    let { title, description } = form;

    let Todo = JSON.stringify({ title, description });

    await commit("setLoading", true);

    const response = await putData(`${todo}/${form.id}`, Todo);

    await commit("setLoading", false);

    if (response === "Unauthorized") {
      await dispatch("auth/LogoutAction", null, { root: true });
      return;
    }
    if (!response) return false;

    return true;
  },

  async DeleteTodoAction({ commit, state, dispatch }, id) {
    await commit("setLoading", true);

    const response = await deleteData(`${todo}/${id}`);

    await commit("setLoading", false);

    if (response === "Unauthorized") {
      await dispatch("auth/LogoutAction", null, { root: true });
      return;
    }
    if (!response) return false;

    let updatedData = state.data.filter((e) => e.id !== id);

    await commit("setData", updatedData);

    return true;
  },
};

const mutations = {
  setLoading(state, loading) {
    state.loading = loading;
  },

  setCurrentPage(state, current_page) {
    state.current_page = current_page;
  },

  setData(state, data) {
    state.data = data;
  },

  setLinks(state, links) {
    state.links = links;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
