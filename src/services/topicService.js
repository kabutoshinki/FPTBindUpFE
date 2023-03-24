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

export async function getTopics(id, currentPage) {
  return axios.get(apiEndpoint + `api/v1/topics/?pageNo=0&pageSize=99&sortBy=id`, options);
}

export async function getProjectsByTopicId(id) {
  return axios.get(apiEndpoint + `api/v1/topics/${id}`, options);
}

export async function deleteTopicById(id) {
  return axios.delete(apiEndpoint + `api/v1/topics/${id}`, options);
}

export async function addTopic(formData) {
  console.log(formData);
  return axios.post(apiEndpoint + `/api/v1/topics`, formData, options);
}
export async function updateTopic(formData) {
  return axios.put(apiEndpoint + `/api/v1/topics/${formData.id}`, formData, options);
}
