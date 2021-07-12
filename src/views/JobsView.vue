<template>
  <div>
    <ListItem />
  </div>
  <!-- <ul class="jobs-list">
    <li class="post" v-for="item in fetchedJobs" :key="item.domain">
      <div class="points">
        {{ item.points || 0 }}
      </div>
      <div>
        <p class="jobs-title">
          <router-link :to="item.url">
            {{item.title}}
          </router-link>
        </p>
        <small class="link-text">{{item.time_ago}} by {{item.user}}</small>
      </div>
    </li>
  </ul> -->
</template>

<script>
  import ListItem from "../components/ListItem.vue";

export default {
  components: {
    ListItem,
  },
}
</script>