import axios from "axios";

import store from "@/store";

import { BASE_URL } from "@/constants/api";

export const API = axios.create({
  baseURL: BASE_URL,
  timeout: 100000,
});

export const postFormData = async (API_END_POINT, data) => {
  const token = store.state.auth.user?.token;
  console.log("post form data token", token);

  try {
    const response = await API.post(API_END_POINT, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    return response.data;
  } catch (error) {
    console.log(`postFormData ${API_END_POINT} catch error`, error);
    let errorCode = String(error).includes("401") ? "Unauthorized" : null;
    return errorCode;
  }
};

export const putFormData = async (API_END_POINT, data) => {
  const token = store.state.auth.user?.token;
  console.log("put form data token", token);

  try {
    const response = await API.put(API_END_POINT, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    return response.data;
  } catch (error) {
    console.log(`putFormData ${API_END_POINT} catch error`, error);
    let errorCode = String(error).includes("401") ? "Unauthorized" : null;
    return errorCode;
  }
};
export const getData = async (API_END_POINT) => {
  const token = store.state.auth.user?.token;

  try {
    const response = await API.get(API_END_POINT, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    return response.data;
  } catch (error) {
    console.log(`getData ${API_END_POINT} catch error`, error);
    let errorCode = String(error).includes("401") ? "Unauthorized" : null;
    return errorCode;
  }
};

export const putData = async (API_END_POINT, data) => {
  const token = store.state.auth.user?.token;
  console.log("put data token", token);

  try {
    const response = await API.put(API_END_POINT, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    return response.data;
  } catch (error) {
    console.log(`put todo ${API_END_POINT} catch error`, error);
    let errorCode = String(error).includes("401") ? "Unauthorized" : null;
    return errorCode;
  }
};

export const deleteData = async (API_END_POINT) => {
  const token = store.state.auth.user?.token;
  console.log("delete data token", token);

  try {
    await API.delete(API_END_POINT, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    return true;
  } catch (error) {
    console.log(`delete todo ${API_END_POINT} catch error`, error);
    let errorCode = String(error).includes("401") ? "Unauthorized" : null;
    return errorCode;
  }
};
