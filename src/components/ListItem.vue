<template>
  <ul class="news-list">
    <li class="post" v-for="(item, index) in listItems" :key="index">
      <!-- 포인트 혜택 -->
      <div class="points">
        {{ item.points || 0 }}
      </div>
      <!-- 기타 영역 -->
      <div>
        <p class="news-title">
          <template v-if="item.domain">
            <a :href="item.url">
              {{item.title}}
            </a>
          </template>
          <template v-else>
            <router-link :to="`item/${item.id}`">
              {{item.title}}
            </router-link>
          </template>
        </p>
        <small class="link-text">
          {{item.time_ago}} by 
          <router-link v-if="item.user" :to="`user/${item.user}`">{{item.user}}</router-link>
          <a v-else :href="item.url">{{item.domain}}</a>
        </small>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    listItems() {
      return this.$store.state.list;
    }

  }
}
</script>

<style scoped>

  .news-list {
    margin: 0;
    padding: 0;
  }

  .news-list li.post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }

  .news-list li.post .points{
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #41b883;
  }

  .news-title {
    margin: 0;
  }

  .link-text {
    color: #828282;
  }

</style>