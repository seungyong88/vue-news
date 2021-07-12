import { 
  fetchNewsList, 
  fetchJobsList,  
  fetchAskList, 
  fetchUserInfo,
  fetchCommentItem
} from "../api";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(res => context.commit('SET_NEWS', res.data))
      .catch(err => console.log(err))
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then(res => context.commit('SET_JOBS', res.data))
      .catch(err => console.log(err))
  },
  FETCH_ASKS(context) {
    fetchAskList()
      .then(res => context.commit('SET_ASKS', res.data))
      .catch(err => console.log(err))
  },
  FETCH_USER({ commit }, userName) {
    fetchUserInfo(userName)
      .then(({ data }) => { commit('SET_USER', data)})
      .catch(err => console.log(err));
  },
  FETCH_ITEM({ commit }, id) {
    fetchCommentItem(id)
      .then(({ data }) => { commit('SET_ITEM', data)})
      .catch(err => console.log(err));
  }

}