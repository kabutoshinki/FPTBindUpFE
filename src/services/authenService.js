import config from "../config.json";
import jwtDecode from "jwt-decode";
import axios from "axios";

const apiEndpoint = config.apiEndpoint;

const accessToken = "Access-Token";

export async function login(user) {
  console.log(user);
  const { data: jwt } = await axios.post(apiEndpoint + "/api/v1/auth/", {
    username: user.username,
    password: user.password,
  });
  console.log(jwt);
  localStorage.setItem(accessToken, jwt.token);
}

export async function googleLogin(token) {
  const { data: jwt } = await axios.post(apiEndpoint + "/api/v1/auth/google", token);
  console.log("jwt");
  console.log(jwt);
  localStorage.setItem(accessToken, jwt.token);
}

export async function register(formData) {
  return axios.post(apiEndpoint + "/api/v1/auth/new", formData);
}

export function logout() {
  localStorage.removeItem(accessToken);
}

export function getCurrentUser() {
  try {
    const token = localStorage.getItem(accessToken);
    const user = jwtDecode(token);
    console.log(user);
    return user;
  } catch (error) {
    return null;
  }
}

export default {
  login,
  logout,
  getCurrentUser,
};
