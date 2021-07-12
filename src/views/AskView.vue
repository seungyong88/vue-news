<template>
  <ul class="ask-list">
    <li class="post" v-for="item in fetchedAsks" :key="item.user">
      <!-- 포인트 혜택 -->
      <div class="points">
        {{ item.points }}
      </div>
      <!-- 기타 영역 -->
      <div>
        <p class="ask-title">
          <router-link :to="`item/${item.id}`">
            {{item.title}}
          </router-link>
        </p>
        <small class="link-text">{{item.time_ago}} by {{item.domain}}</small>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedAsks'
    ])
  },

  // computed: {
  //   ...mapGetters("RecognitionDataDetailStore"
  //     , ["getModelInfo", "getFields", "getPageType"]),
  // },ww

  created () {
    this.$store.dispatch('FETCH_ASKS');
  },
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