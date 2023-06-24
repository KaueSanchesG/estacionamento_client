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

.home {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.img_background_view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(121, 121, 121, 0.1)), url(assets/EstacionamentoHome.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.img_background_form {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(121, 121, 121, 0.1)), url(assets/EstacionamentoRecibo.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
