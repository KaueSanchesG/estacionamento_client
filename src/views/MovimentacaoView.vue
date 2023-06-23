<template>
    <div class="home">
        <div class="img_background" :style="{ backgroundImage: `url(${backgroundImage})` }"></div>
        <Header />
        <Select />
        <Table :items="movimentacaoList" :columns="tableColumns" />
        <Footer />
    </div>
</template>
  
<script lang="ts">
import Header from '../components/Header.vue';
import Select from '../components/Select.vue';
import Table from '../components/Table.vue';
import Footer from '../components/Footer.vue';

import { MovimentacaoModel } from "../model/MovimentacaoModel";
import MovimentacaoClient from "../client/movimentacao.client";
import { defineComponent } from "vue";

export default defineComponent({
    name: 'MovimentacaoView',
    components: {
        Header,
        Select,
        Table,
        Footer,
    },
    data() {
        return {
            movimentacaoList: new Array<MovimentacaoModel>(),
            tableColumns: [
                { label: 'ID', field: 'id' },
                { label: 'Ativo', field: 'ativo' },
                { label: 'Condutor', field: 'condutor.nome' },
                { label: 'Placa', field: 'veiculo["placa"]' },
                { label: 'Entrada', field: 'entrada' },
                { label: 'Saída', field: 'saida' }
            ],
            backgroundImage: require("../assets/EstacionamentoHome.jpg"),
        };
    },
    mounted() {
        this.findAll();
    },
    methods: {
        findAll() {
            MovimentacaoClient.listaAll()
                .then((success: MovimentacaoModel[]) => {
                    console.log(success);
                    this.movimentacaoList = success;
                })
                .catch(error => {
                    console.log(error);
                });
        },
    },
})
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
    background-color: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(121, 121, 121, 0.1));
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
}
</style>
  