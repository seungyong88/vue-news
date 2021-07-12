<template>
  <div>
    <ListItem />
  </div>
  <!-- <ul class="ask-list">
    <li class="post" v-for="item in fetchedAsks" :key="item.user">
      <div class="points">
        {{ item.points }}
      </div>
      <div>
        <p class="ask-title">
          <router-link :to="`item/${item.id}`">
            {{item.title}}
          </router-link>
        </p>
        <small class="link-text">{{item.time_ago}} by {{item.domain}}</small>
      </div>
    </li>
  </ul> -->
</template>

<script>
  import ListItem from "../components/ListItem.vue";

  export default {
    components: {
      ListItem,
    }
  }
</script>

<style scoped>

  .ask-list {
    margin: 0;
    padding: 0;
  }

  .ask-list li.post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }

  .ask-list li.post .points{
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #41b883;
  }

  .ask-title {
    margin: 0;
  }

  .link-text {
    color: #828282;
  }

</style>