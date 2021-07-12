<template>
  <ul class="news-list">
    <li class="post" v-for="item in fetchedNews" :key="item.user">
      <!-- 포인트 혜택 -->
      <div class="points">
        {{ item.points }}
      </div>
      <!-- 기타 영역 -->
      <div>
        <p class="news-title">
          <a :href="item.url">
            {{item.title}}
          </a>
        </p>
        <small class="link-text">
          {{item.time_ago}} by 
          <router-link :to="`user/${item.user}`">{{item.user}}</router-link>
        </small>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // 1.
    // ...mapState({
    //   users: state => state.users
    // })

    // ...mapGetters({
    //   fetchedUsers: 'fetchedUsers'
    // })

    ...mapGetters([
      'fetchedNews'
    ])

  },
  created () {
    this.$store.dispatch('FETCH_NEWS');
  },
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