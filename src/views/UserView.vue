<template>
  <div>
    <UserProfile />
    <!-- <p>name: {{fetchedUser.id}}</p>
    <p>karma: {{fetchedUser.karma}}</p>
    <p>created: {{fetchedUser.created}}</p> -->
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";

export default {
  components: {
    UserProfile,
  }
}

</script>

<style scoped>

</style>