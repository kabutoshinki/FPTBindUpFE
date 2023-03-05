import config from "../config.json";
import axios from "axios";

const apiEndpoint = config.apiEndpoint;
console.log("Api: " + apiEndpoint);
let accessToken = localStorage.getItem("Access-Token");
// Đặt quyền truy cập vào api
const options = {
  headers: {
    Authorization: "Bearer " + accessToken,
  },
};

export async function findUserById(id) {
  return axios.get(apiEndpoint + `/api/v1/user/{id}?id=${id}`, options);
}
