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
    catchBlockErrorHandler(error);
  }
};

export const getData = async (API_END_POINT) => {
  const token = store.state.auth.user?.token;

  try {
    const response = await API.get(API_END_POINT, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}` : "",
      },
    });

    return response.data;
  } catch (error) {
    catchBlockErrorHandler(error);
  }
};

export const putData = async (API_END_POINT, data) => {
  const token = store.state.auth.user?.token;

  try {
    const response = await API.put(API_END_POINT, data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}` : "",
      },
    });

    return response.data;
  } catch (error) {
    catchBlockErrorHandler(error);
  }
};

export const deleteData = async (API_END_POINT) => {
  const token = store.state.auth.user?.token;

  try {
    await API.delete(API_END_POINT, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}` : "",
      },
    });

    return true;
  } catch (error) {
    catchBlockErrorHandler(error);
  }
};

export const getDataWithCustomURL = async (URL) => {
  const token = store.state.auth.user?.token;

  try {
    const response = await axios.get(URL, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": token ? `Bearer ${token}` : "",
      },
    });

    return response.data;
  } catch (error) {
    catchBlockErrorHandler(error);
  }
};

const catchBlockErrorHandler = (error) => {
  let errorCode = String(error).includes("401") ? "Unauthorized" : null;
  return errorCode;
};
