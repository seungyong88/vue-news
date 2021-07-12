<template>
  <div>
    <p v-for="item in fetchedAsks" :key="item.user">
      <router-link :to="`item/${item.id}`">
        {{item.title}}
      </router-link>
      <small>{{item.time_ago}} by {{item.domain}}</small>
    </p>
  </div>
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
  // },

  created () {
    this.$store.dispatch('FETCH_ASKS');
  },
}

</script>

<style scoped>

</style>