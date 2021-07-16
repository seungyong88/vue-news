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
  export default {
    
  }
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 0.7rem;
}

</style>