import config from "../config.json";
import axios from "axios";

const apiEndpoint = config.apiEndpoint;

let accessToken = localStorage.getItem("Access-Token");
// Đặt quyền truy cập vào api
const options = {
  headers: {
    Authorization: "Bearer " + accessToken,
  },
};

export async function findUserById(id) {
  return axios.get(apiEndpoint + `/api/v1/user/${id}`, options);
}

export async function updateUserById(formData) {
  return axios.put(apiEndpoint + `/api/v1/user/${formData.id}`, formData, options);
}

export async function userImage(id, formData) {
  return axios.put(apiEndpoint + `/api/v1/user/${id}/avatar`, formData, options);
}
