<template>
  <div class="header">
    <router-link to="/">
      <img src="../assets/HomeLogo.png" id="icon" alt="icon de um carrinho">
    </router-link>
    <h1 class="titulo">Estacionamento do pedro</h1>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Header'
};
</script>

<style scoped lang="scss">
.header {
  position: relative;
  width: 100%;
  min-height: 5vw;
  //height: 5vw;
  display: flex;
  justify-content: center;
  background: rgba(67, 56, 98, 0.4);
}

#icon {
  position: absolute;
  top: 1vw;
  left: 1.8vw;
  width: 3vw;
  height: 3vw;
  display: flex;
  text-align: center;
  cursor: pointer;
}

img:hover {
  background-color: wheat;
  border-radius: 12%;
}

.titulo {
  font-family: "Merriweather", sans-serif;
  font-weight: 400;
  font-size: 2vw;
  text-align: center;
}
</style>
