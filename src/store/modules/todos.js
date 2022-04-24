import { todo, todosList } from "@/constants/api";
import { getData, postFormData } from "@/lib/axios";

const state = {
  data: [],
  links: [],
};

const getters = {
  TodosList: (state) => state.data,
  Pagination: (state) => state.links,
};

const actions = {
  async GetTodosListAction({ commit }) {
    const response = await getData(todosList);

    if (!response) return false;

    await commit("setData", response.items.data);
    await commit("setLinks", response.items.links);
    return true;
    },
    
};

const mutations = {
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
