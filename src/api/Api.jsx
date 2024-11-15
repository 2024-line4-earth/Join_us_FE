import axios from "axios";

export const API = axios.create({ baseURL: import.meta.env.VITE_SERVER_API });

const apiCall = async (url, method = "get", data = null, token = null) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    if (token) {
      headers["Authorization"] = `token ${token}`;
    }
    const config = {
      url,
      method,
      headers,
    };

    if (method.toLowerCase() === "get") {
      config.params = data;
    } else {
      config.data = data;
    }

    const response = await API(config);
    return response;
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
};

export default apiCall;
