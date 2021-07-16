<template>
  <div>
    <!-- <UserProfile v-if="userInfo">
      <div slot="username">{{userInfo.id}}</div>
      <span slot="time">{{ 'joined ' + userInfo.created}}, </span>
      <span slot="karma">{{userInfo.karma}}</span>
    </UserProfile> -->
  </div>
</template>

<script>
import UserProfile from "../components/_UserProfile.vue";

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