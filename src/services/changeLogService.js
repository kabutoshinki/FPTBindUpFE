import config from "../config.json";
import axios from "axios";
import { async } from "@firebase/util";

const apiEndpoint = config.apiEndpoint;
console.log("Api: " + apiEndpoint);
let accessToken = localStorage.getItem("Access-Token");
// Đặt quyền truy cập vào api
const options = {
  headers: {
    Authorization: "Bearer " + accessToken,
  },
};

export async function getChangeLogById(id) {
  return axios.get(apiEndpoint + `api/v1/changelog/${id}`, options);
}

export async function addChangeLog(formData) {
  return axios.post(apiEndpoint + `api/v1/changelog/`, formData, options);
}

export async function updateChangeLog(formData) {
  return axios.put(
    apiEndpoint + `api/v1/changelog/?id=${formData.id}&title=${formData.title}&description=${formData.description}`,
    formData,
    options
  );
}

export async function getChangeLogs(id) {
  return axios.get(apiEndpoint + `api/v1/changelog/?projectId=${id}`, options);
}
