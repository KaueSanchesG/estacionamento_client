<template>
    <div class="recibo">
        <div class="img_background_recibo"></div>
        <Header />
        <SelectModel />
        <Footer />
    </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SelectModel from '@/components/SelectModel.vue';

export default {
    name: 'reciboview',
    components: {
        Header,
        Footer,
        SelectModel
    }
}
</script>
<style lang="scss">
.recibo {
    position: relative;
    width: 100vw;
    height: 100vh;
}

.img_background_recibo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(121, 121, 121, 0.1)), url(../assets/EstacionamentoRecibo.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>