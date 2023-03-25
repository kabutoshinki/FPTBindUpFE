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

export async function changeStatusApplication(id, status) {
  return axios.put(
    apiEndpoint + `api/v1/applications/status/?applicationId=${id}&applicationStatus=${status}`,
    status,
    options
  );
}

export async function apply(formData) {
  return axios.post(apiEndpoint + `/api/v1/applications/`, formData, options);
}
export async function getApplicationUser(userId) {
  return axios.get(apiEndpoint + `/api/v1/applications/user?userId=${userId}`, options);
}
