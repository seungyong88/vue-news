<template>
  <div v-if="fetchedItem">
    <section>
      <!-- 사용자 정보 -->
      <UserProfile >
        <!-- <div slot="username">{{fetchedItem.user}}</div> -->
        <div slot="username">
          <router-link :to="`/user/${fetchedItem.user}`">{{fetchedItem.user}}</router-link>
        </div>
        <span slot="time">{{ 'joined ' + fetchedItem.time_ago}}</span>
      </UserProfile>
    </section>
    <section>
      <h2>{{fetchedItem.title}}</h2>
    </section>
    <section>
      <p v-html="fetchedItem.content" />
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from "../components/_UserProfile.vue";

  export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters([
      'fetchedItem'
    ]),
    // fetchedItem() {
    //   return this.$store.state.item;
    // }
  },
    created () {
      const id = this.$route.params.id;
      this.$store.dispatch('FETCH_ITEM', id);
    }
  }
  
</script>