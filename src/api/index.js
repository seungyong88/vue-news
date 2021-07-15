import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
  // https://api.hnpwa.com/v0/user/davideast.json
}

// export function fetchNewsList() {
//   return axios.get(`${config.baseUrl}news/1.json`);
// }

// export function fetchJobsList() {
//   return axios.get(`${config.baseUrl}jobs/1.json`);
// }

// export function fetchAskList() {
//   return axios.get(`${config.baseUrl}ask/1.json`);
// }

export function fetchUserInfo(userName) {
  return axios.get(`${config.baseUrl}user/${userName}.json`);
}

export function fetchCommentItem(id) {
  return axios.get(`${config.baseUrl}item/${id}.json`);
}

export function fetchList(pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}