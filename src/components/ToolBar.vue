<template>
  <div class="header">
    <router-link to="/news">news</router-link> |
    <router-link to="/jobs">jobs</router-link> |
    <router-link to="/ask">ask</router-link>
  </div>
</template>

<style scoped>
  .header {
    color: white;
    background: #42b883;
    display: flex;
    padding: 8px;
  }

  .header a {
    color: #fff;
  }

  .header .router-link-exact-active {
    color: #35495e;
  }
</style>