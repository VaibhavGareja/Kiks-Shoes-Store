import axios from "axios";

export function fetchAllProductData() {
  return axios
    .get("https://api.render.com/deploy/srv-cq9ta12ju9rs73bacd4g?key=KeiE0KAW03I/products")
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export function registerUser(userData) {
  return axios
    .post("https://api.render.com/deploy/srv-cq9ta12ju9rs73bacd4g?key=KeiE0KAW03I/auth/signup", userData)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}
export function loginUser(userData) {
  return axios
    .post("https://api.render.com/deploy/srv-cq9ta12ju9rs73bacd4g?key=KeiE0KAW03I/auth/login", userData)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}
