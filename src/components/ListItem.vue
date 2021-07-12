<template>
  <ul class="news-list">
    <li class="post" v-for="item in listItems" :key="item.user">
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
    ]),

    listItems() {
     if(this.$route.name === "news") {
       return this.$store.state.news;
        // return this.fetchedNews;
      }else if(this.$route.name === "ask") {
        // return this.fetchedAsks;
       return this.$store.state.asks;
      }else if(this.$route.name === "jobs") {
        // return this.fetchedJobs;
       return this.$store.state.jobs;
      }else{ 
        return null;
      } 
    }

  },
  created () {
    console.log(this.$route.name);
    if(this.$route.name === "news") {
      this.$store.dispatch('FETCH_NEWS');
    }else if(this.$route.name === "ask") {
      this.$store.dispatch('FETCH_ASKS');
    }else if(this.$route.name === "jobs") {
      this.$store.dispatch('FETCH_JOBS');
    }
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