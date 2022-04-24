import axios from "axios";

import store from "@/store";

import { BASE_URL } from "@/constants/api";

export const API = axios.create({
  baseURL: BASE_URL,
  timeout: 100000,
});

export const postFormData = async (API_END_POINT, data) => {
  const token = store.state.auth.user?.token;

  try {
    const response = await API.post(API_END_POINT, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": token ? `Bearer ${token}` : "",
      },
    });

    return response.data;
  } catch (error) {
    console.log(`postFormData ${API_END_POINT} catch error`, error);
    return;
  }
};
