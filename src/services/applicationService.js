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

export async function addMajor(formData) {
  console.log(formData);
  return axios.post(apiEndpoint + `/api/v1/major/`, formData, options);
}
