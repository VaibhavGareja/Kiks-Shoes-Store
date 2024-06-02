import axios from "axios";

export function fetchAllProductData() {
  return axios
    .get("http://localhost:3000/products")
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export function registerUser(userData) {
  return axios
    .post("http://localhost:3000/auth/signup", userData)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}
export function loginUser(userData) {
  return axios
    .post("http://localhost:3000/auth/login", userData)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}
