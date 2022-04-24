import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";
import todos from "./modules/todos";

export default createStore({
  modules: {
    auth,
    todos,
  },
  plugins: [createPersistedState()],
});
