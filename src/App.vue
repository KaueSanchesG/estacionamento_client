<template>
  <router-view />
</template>

<script lang="ts">
export default {
  name: 'App',
}
</script>
<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

* {
  box-sizing: border-box;
}

#app {
  font-family: 'Roboto', sans-serif;
}
</style>
