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

// Get error
export async function extractFailureInfo(res) {
  if (res.status < 200 || res.status >= 400) {
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

    for (let key in Object.keys(data)) {
      result.fields[key] = extractErrorFromField(data[key]);
    }
  }

  return result;
}

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

async function authenticatedFetchWithRedirect(
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

export {
  setAuthToken,
  getAuthToken,
  authenticatedFetch,
  authenticatedFetchWithRedirect,
  Api,
};

export default Api;
