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

export function getProjects(currentPage) {
  return axios.get(apiEndpoint + `api/v1/projects?pageNo=${currentPage}&pageSize=5&sortBy=voteQuantity`);
}

export function getProjectsUser(id) {
  return axios.get(apiEndpoint + `api/v1/users/${id}`);
}

export async function getProjectById(id) {
  console.log(id);
  const { data } = await axios.get(apiEndpoint + `api/v1/projects/${id}`);
  return data;
}

export async function getImageProject(id) {
  console.log(id);
  const { data } = await axios.get(apiEndpoint + `api/v1/projects/${id}/image/`);
  return data;
}

export async function createProject(projectInfo) {
  console.log(projectInfo);
  return axios.post(apiEndpoint + "api/v1/projects", projectInfo, options);
}

export async function addTopicProject(projectId, topicId) {
  const topic = topicId[0];
  return axios.post(apiEndpoint + `api/v1/projects/${projectId}/topic?topicIds=${topic}`, topicId, options);
}

export async function addMentorProject(projectId, mentorId) {
  console.log(mentorId);
  return axios.post(apiEndpoint + `api/v1/projects/${projectId}/mentor?mentorId=${mentorId}`, mentorId, options);
}

export async function updateProject(projectInfo) {
  console.log(projectInfo);
  return axios.put(apiEndpoint + `api/v1/projects/?id=${projectInfo.id}`, projectInfo, options);
}

export async function uploadImageProject(id, imageFile) {
  console.log(id);
  return axios.post(apiEndpoint + `api/v1/projects/${id}/image/`, imageFile, options);
}

export async function changeStatus(projectId, status) {
  console.log(options);
  return axios.put(apiEndpoint + `api/v1/projects/${projectId}?projectStatus=${status}`, status, options);
}

export async function projectVote(projectId, userId) {
  return axios.post(apiEndpoint + `api/v1/projects/${projectId}/vote?userId=${userId}`, userId, options);
}

export async function uploadLogoProject(projectId, imageFile) {
  console.log(options);
  console.log(projectId);
  return axios.post(apiEndpoint + `api/v1/projects/${projectId}/logo/`, imageFile, options);
}

//status đổi thành DELETE
export async function deleteProject(id) {
  return axios.delete(apiEndpoint + `api/v1/projects/${id}`, options);
}
export async function deleteProjectMentor(id, projectId) {
  return axios.delete(apiEndpoint + `api/v1/projects/${id}/mentor?mentorId=${projectId}`, options);
}

export async function deleteProjectImage(id) {
  return axios.delete(apiEndpoint + `api/v1/projects/{projectId}/image/${id}`, options);
}
