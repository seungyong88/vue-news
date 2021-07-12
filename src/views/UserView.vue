<template>
  <div>
    <UserProfile v-if="userInfo">
      <div slot="username">{{userInfo.id}}</div>
      <div slot="time">{{userInfo.created}}</div>
      <div slot="karma">{{userInfo.karma}}</div>
    </UserProfile>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
  created () {
    const name = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', name);
  },
  computed: {
    userInfo() {
      return this.$store.state.user; 
    }
  }

}
</script>