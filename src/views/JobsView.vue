<template>
  <div>
    <p v-for="item in fetchedJobs" :key="item.domain">
      <a :href="item.url">
        {{item.title}}
      </a>
      <small>{{item.time_ago}} by {{item.user}}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  // computed: {
  //   ...mapGetters({
  //     fetchedJobs: 'fetchedJobs'
  //   })
  // },
  computed: {
    ...mapGetters([
      'fetchedJobs'
    ])
  },
  created () {
    this.$store.dispatch('FETCH_JOBS');
  },
}

</script>

<style scoped>

</style>