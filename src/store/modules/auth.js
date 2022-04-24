import { login, logout, signup } from "@/constants/api";
import { postFormData } from "@/lib/axios";

const state = {
  user: null,
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  StateUser: (state) => state.user,
};

const actions = {
  async LoginAction({ commit }, form) {
    let { email, password } = form;

    const User = new FormData();
    User.append("email", email);
    User.append("password", password);

    const userData = await postFormData(login, User);

    if (!userData) return false;

    await commit("setUser", userData.user);
    return true;
  },

  async SignupAction({ commit }, form) {
    let { email, password, password_confirmation } = form;

    const User = new FormData();
    User.append("email", email);
    User.append("password", password);
    User.append("password_confirmation", password_confirmation);

    const createAccount = await postFormData(signup, User);

    if (!createAccount) return false;

    const userData = await postFormData(login, User);

    if (!userData) return false;

    await commit("setUser", userData.user);

    return true;
  },

  async LogoutAction({ commit, state }) {
    const response = await postFormData(logout, state.user.token);

    if (!response) return false;

    await commit("setUser", null);

    return true;
  },
};

const mutations = {
  setUser(state, userData) {
    state.user = userData;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
