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

export async function getMentors(id, currentPage) {
  return axios.get(apiEndpoint + `/api/v1/mentor/`, options);
}

export async function getListMentorsById(id) {
  return axios.get(apiEndpoint + `/api/v1/mentor/project/${id}`, options);
}

export async function getMentorById(id) {
  return axios.get(apiEndpoint + `api/v1/mentor/${id}`, options);
}

export async function addMentor(formData) {
  console.log(formData);
  return axios.post(apiEndpoint + `/api/v1/mentor/`, formData, options);
}
