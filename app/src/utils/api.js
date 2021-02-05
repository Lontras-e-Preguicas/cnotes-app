import AsyncStorage from "@react-native-async-storage/async-storage";
import { Constants } from "../config";

// Storage
const AUTH_TOKEN_PATH = "@authToken";

const setAuthToken = async (token) => {
  await AsyncStorage.setItem(AUTH_TOKEN_PATH, token);
};

const getAuthToken = async () => {
  return await AsyncStorage.getItem(AUTH_TOKEN_PATH);
};

async function fetchTimeout(input, { timeout = 10000, ...init }) {
  // Throws AbortError
  const controller = new AbortController();
  const timeoutId = setTimeout(controller.abort, timeout);

  const response = await fetch(input, { signal: controller.signal, ...init });
  clearTimeout(timeoutId);

  return response;
}

async function authenticatedFetch(input, init = {}, fetcher = fetch) {
  let headers = new Headers();
  let authToken = await getAuthToken();

  headers.append("Authorization", `Token ${authToken}`);

  let params = {
    ...init,
    headers,
  };

  return await fetcher(input, params);
}

// Requests
const JSON_CONTENT_TYPE = "application/json";

// Add timeout support?
class Api {
  async login(email, password) {
    const params = {
      method: "POST",
      headers: new Headers({
        "Content-Type": JSON_CONTENT_TYPE,
      }),
      body: JSON.stringify({ email, password }),
      timeoutMessage: "",
    };

    let response;
    let data = {};

    try {
      response = await fetchTimeout(
        `${Constants.API_URL}/api/user/token/`,
        params
      );
      data = await response.json();
    } catch {
      throw new Error("Falha ao fazer requisição");
    }

    if (response.status == 200) {
      await setAuthToken(data.token);
      return;
    }

    if (response.status == 400) {
      if (data.non_field_errors) {
        throw new Error(data.non_field_errors[0]);
      }

      if (data.email) {
        throw new Error("E-mail é obrigatório");
      }

      if (data.password) {
        throw new Error("Senha é obrigatório");
      }
    }

    throw new Error("Falha ao realizar login");
  }
}

export { setAuthToken, getAuthToken, authenticatedFetch, Api };

export default Api;
