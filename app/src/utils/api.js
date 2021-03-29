import AsyncStorage from "@react-native-async-storage/async-storage";
import { Constants } from "../config";

// URLs

export const API_URLS = {
  notebook: `${Constants.API_URL}/api/notebook/notebook/`,
  me: `${Constants.API_URL}/api/user/me/`,
  signup: `${Constants.API_URL}/api/user/create/`,
  login: `${Constants.API_URL}/api/user/token/`,
  passwordReset: `${Constants.API_URL}/api/user/password_reset/`,
  folder: `${Constants.API_URL}/api/notebook/folder/`,
  noteGroup: `${Constants.API_URL}/api/notebook/note_group/`,
};

// Storage
const AUTH_TOKEN_PATH = "@authToken";

export const setAuthToken = async (token) => {
  await AsyncStorage.setItem(AUTH_TOKEN_PATH, token);
};

export const getAuthToken = async () => {
  return await AsyncStorage.getItem(AUTH_TOKEN_PATH);
};

export const clearAuthToken = async () => {
  return await AsyncStorage.removeItem(AUTH_TOKEN_PATH);
};

// Get error
export async function extractFailureInfo(res) {
  if (res.status >= 200 && res.status < 400) {
    return { fail: false };
  }

  const data = await res.json();

  let result = {
    fail: true,
    message: "Falha ao realizar requisição",
    fields: {},
    data,
  };

  const extractErrorFromField = (field) => {
    if (field instanceof Array) {
      return field[0];
    }
    return field;
  };

  if (typeof data === "string") {
    result.message = data;
  } else if (data instanceof Array) {
    //  non_field_errors
    if (data.length !== 0 && typeof data[0] === "string") {
      result.message = data[0];
    }
  } else {
    result.message =
      extractErrorFromField(data.non_field_errors) || result.message;
    result.message = extractErrorFromField(data.detail) || result.message;

    for (let key of Object.keys(data)) {
      result.fields[key] = extractErrorFromField(data[key]);
    }
  }

  return result;
}

export async function fetchTimeout(input, { timeout = 10000, ...init }) {
  // Throws AbortError
  const controller = new AbortController();

  const params = { signal: controller.signal, ...init };

  const timeoutId = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(input, params);
  clearTimeout(timeoutId);

  return response;
}

export async function authenticatedFetch(input, init = {}, fetcher = fetch) {
  let authToken = await getAuthToken();

  let headers = {
    ...init.headers,
    Authorization: `Token ${authToken}`,
  };

  let params = {
    ...init,
    headers,
  };

  return await fetcher(input, params);
}

export async function authenticatedFetchWithRedirect(
  navigation,
  input,
  init,
  fetcher = fetch,
) {
  const res = await authenticatedFetch(input, init, fetcher);

  if (res.status === 401) {
    navigation.reset({
      index: 0,
      routes: [{ name: "AuthStack" }],
    });
  }

  return res;
}

// Requests
export async function logout() {
  await clearAuthToken();
}
