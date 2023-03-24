import config from "../config.json";
import axios from "axios";
import { async } from "@firebase/util";

const apiEndpoint = config.apiEndpoint;

let accessToken = localStorage.getItem("Access-Token");
// Đặt quyền truy cập vào api
const options = {
  headers: {
    Authorization: "Bearer " + accessToken,
  },
};

export async function getJobs() {
  return axios.get(apiEndpoint + `api/v1/jobs?pageNo=0&pageSize=99&sortBy=id`, options);
}

export async function getJobById(id) {
  return axios.get(apiEndpoint + `api/v1/jobs/${id}/detail`, options);
}

export async function getJobsByProjectId(id) {
  return axios.get(apiEndpoint + `api/v1/jobs/${id}`, options);
}
export async function deleteJobById(id) {
  return axios.delete(apiEndpoint + `api/v1/jobs/${id}`, options);
}

export async function updateJobById(formData) {
  return axios.put(
    apiEndpoint + `api/v1/jobs?id=${formData.id}&name=${formData.name}&description=${formData.description}`,
    formData,
    options
  );
}

export async function addJob(formData) {
  console.log(formData);
  return axios.post(apiEndpoint + `api/v1/jobs`, formData, options);
}
