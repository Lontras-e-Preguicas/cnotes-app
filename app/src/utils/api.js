import AsyncStorage from "@react-native-async-storage/async-storage";
import { Constants } from "../config";

// URLs

export const API_URLS = {
  notebook: `${Constants.API_URL}/api/notebook/notebook/`,
};

// Storage
const AUTH_TOKEN_PATH = "@authToken";

const setAuthToken = async (token) => {
  await AsyncStorage.setItem(AUTH_TOKEN_PATH, token);
};

const getAuthToken = async () => {
  return await AsyncStorage.getItem(AUTH_TOKEN_PATH);
};

const clearAuthToken = async () => {
  return await AsyncStorage.removeItem(AUTH_TOKEN_PATH);
};

async function fetchTimeout(input, { timeout = 10000, ...init }) {
  // Throws AbortError
  const controller = new AbortController();

  const params = { signal: controller.signal, ...init };

  const timeoutId = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(input, params);
  clearTimeout(timeoutId);

  return response;
}

async function authenticatedFetch(input, init = {}, fetcher = fetch) {
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
    };

    let response;
    let data = {};

    try {
      response = await fetchTimeout(
        `${Constants.API_URL}/api/user/token/`,
        params,
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
        throw new Error(`E-mail: ${data.email[0]}`);
      }

      if (data.password) {
        throw new Error(`Senha: ${data.password[0]}`);
      }
    }

    throw new Error("Falha ao realizar login");
  }

  async signup(name, email, password) {
    const params = {
      method: "POST",
      headers: new Headers({
        "Content-Type": JSON_CONTENT_TYPE,
      }),
      body: JSON.stringify({ name, email, password }),
    };

    let response;
    let data = {};

    try {
      response = await fetchTimeout(
        `${Constants.API_URL}/api/user/create/`,
        params,
      );
      data = await response.json();
    } catch {
      throw new Error("Falha ao fazer requisição");
    }

    if (response.status == 201) {
      return data;
    }

    if (response.status == 400) {
      if (data.non_field_errors) {
        throw new Error(data.non_field_errors[0]);
      }

      if (data.name) {
        throw new Error(`Nome: ${data.name[0]}`);
      }

      if (data.email) {
        throw new Error(`E-mail: ${data.email[0]}`);
      }

      if (data.password) {
        throw new Error(`Senha: ${data.password[0]}`);
      }
    }

    throw new Error("Falha ao realizar cadastro");
  }

  async me() {
    const params = {
      method: "GET",
    };

    let response;
    let data = {};

    try {
      response = await authenticatedFetch(
        `${Constants.API_URL}/api/user/me/`,
        params,
      );
      data = await response.json();
    } catch {
      throw new Error("Falha ao fazer requisição");
    }

    if (response.status == 200) {
      return data;
    }

    if (response.status == 401) {
      throw new Error("Usuário não autenticado");
    }

    throw new Error("Falha ao recuperar informações do usuário");
  }

  async logout() {
    await clearAuthToken();
  }
}

export { setAuthToken, getAuthToken, authenticatedFetch, Api };

export default Api;
