<template>
  <router-view />
</template>

<script lang="ts">
import HomeView from './views/HomeView.vue'
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    HomeView,
    Footer,
  }
}
</script>
<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');



#app {
  font-family: 'Roboto', sans-serif;
}
</style>
