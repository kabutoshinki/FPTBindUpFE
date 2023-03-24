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
export async function getChangeLogById(id) {
  return axios.get(apiEndpoint + `/api/v1/changelogs/${id}`, options);
}

export async function addChangeLog(formData) {
  return axios.post(apiEndpoint + `/api/v1/changelogs/`, formData, options);
}

export async function updateChangeLog(formData) {
  return axios.put(
    apiEndpoint + `api/v1/changelogs/?id=${formData.id}&title=${formData.title}&description=${formData.description}`,
    formData,
    options
  );
}

export async function deleteChangeLog(id) {
  return axios.delete(apiEndpoint + `api/v1/changelogs/?id=${id}`, options);
}

export async function getChangeLogs(id) {
  return axios.get(apiEndpoint + `api/v1/changelogs/?projectId=${id}`, options);
}
