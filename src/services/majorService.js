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

export async function getMajors() {
  return axios.get(apiEndpoint + `api/v1/majors/?pageNo=0&pageSize=99&sortBy=id`, options);
}

export async function getMajorById(id) {
  return axios.get(apiEndpoint + `api/v1/majors/${id}`, options);
}
export async function deleteMajorById(id) {
  return axios.delete(apiEndpoint + `api/v1/majors/${id}`, options);
}

export async function updateMajorById(formData) {
  return axios.put(apiEndpoint + `api/v1/majors/${formData.id}`, formData, options);
}

export async function addMajor(formData) {
  console.log(formData);
  return axios.post(apiEndpoint + `/api/v1/majors/`, formData, options);
}
