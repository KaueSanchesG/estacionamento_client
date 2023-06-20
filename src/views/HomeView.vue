<template>
  <div class="home">
    <div class="img_background"></div>
    <Header />
    <SelectModel />
    <Table />
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import SelectModel from '../components/SelectModel.vue';
import Table from '../components/Table.vue';

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    SelectModel,
    Table,
  }
}
</script>

<style lang="scss">
.home {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.img_background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(121, 121, 121, 0.1)), url(../assets/EstacionamentoHome.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
}
</style>
