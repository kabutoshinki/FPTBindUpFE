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

export async function getMembersProject(id) {
  return axios.get(apiEndpoint + `/api/v1/member/?projectId=${id}`, options);
}

export async function getMemberProjectById(id) {
  return axios.get(apiEndpoint + `/api/v1/member/${id}`, options);
}

export async function createMemberProject(formData) {
  return axios.post(apiEndpoint + `/api/v1/member/`, formData, options);
}

export async function updateMemberProject(formData) {
  return axios.put(apiEndpoint + `/api/v1/member/`, formData, options);
}

export async function deleteMemberProjectById(id) {
  return axios.delete(apiEndpoint + `/api/v1/member/${id}`, options);
}
