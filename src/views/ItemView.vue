<template>
  <div>
    <section>
      <div>사용자 프로필</div>
      <div>
        <router-link :to="`/user/${fetchedItem.user}`" >
          {{fetchedItem.user}}
        </router-link>
        <div class="time">
          {{fetchedItem.time_ago}}
        </div>
      </div>
      <h2>{{fetchedItem.title}}</h2>
    </section>
    <section>
      <p v-html="fetchedItem.content" />
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

  export default {
   
  computed: {
    ...mapGetters([
      'fetchedItem'
    ])
  },
    created () {
      const id = this.$route.params.id;
      this.$store.dispatch('FETCH_ITEM', id);
    }
  }
  
</script>

<style scoped>

</style>