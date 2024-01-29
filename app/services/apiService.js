import axios from "axios";

const API_URL = "https://api.spoonacular.com";

// interceptors

axios.interceptors.request.use(
  (config) => {
    console.log("request", config);
    return config;
  },
  (error) => {
    console.log("request error", error);
    return Promise.reject(error);
  }
);

axios.options.headers = {
  "Content-Type": "application/json",
};

// query param apiKey: string
axios.interceptors.request.use(
  (config) => {
    config.params = config.params || {};
    config.params["apiKey"] = "22f382d9269f42af93b7c4431f193882";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const ApiServices = {
  getRandomRecipes: ({ limit = 5 }) =>
    axios.get(`${API_URL}/recipes/random?number=${limit}`),
  getRecipeById: (id) => axios.get(`${API_URL}/recipes/${id}/information`),
  searchByCategory: (search) => axios.get(`${API_URL}/recipes/${search}`),
};

export default ApiServices;
