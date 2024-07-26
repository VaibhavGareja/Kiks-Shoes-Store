import axios from "axios";
const backendUrl = "https://kiks-shoes-store.onrender.com"

export function fetchAllProductData() {
  return axios
    .get(`${backendUrl}/products`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export function registerUser(userData) {
  return axios
    .post(`${backendUrl}/auth/signup`, userData)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}
export function loginUser(userData) {
  return axios
    .post(`${backendUrl}/auth/login`, userData)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}
