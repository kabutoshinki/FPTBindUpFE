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
  return axios.get(apiEndpoint + `/api/v1/mentors`, options);
}

export async function getListMentorsById(id) {
  return axios.get(apiEndpoint + `/api/v1/mentors/project/${id}`, options);
}

export async function getMentorById(id) {
  return axios.get(apiEndpoint + `api/v1/mentors/${id}`, options);
}

export async function addMentor(formData) {
  console.log(formData);
  return axios.post(apiEndpoint + `api/v1/mentors/`, formData, options);
}
