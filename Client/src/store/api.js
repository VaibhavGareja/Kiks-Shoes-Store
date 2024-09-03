import axios from "axios";
const backendUrl = "https://kiks-shoes-store-backend.onrender.com"
// const backendUrl = "http://localhost:3000";

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
