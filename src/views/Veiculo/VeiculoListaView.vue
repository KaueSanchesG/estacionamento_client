<template>
    <div class="home">
        <div class="img_background"></div>
        <Header />
        <Select />
        <Table :items="veiculoList" :columns="tableColumns" />
        <Footer />
    </div>
</template>
<script lang="ts">
import Header from '../../components/Header.vue';
import Select from '../../components/Select.vue';
import Table from '../../components/Table.vue';
import Footer from '../../components/Footer.vue';

import { defineComponent } from 'vue';
import VeiculoClient from '@/client/veiculo.client';
import { VeiculoModel } from '@/model/VeiculoModel';

export default defineComponent({
    name: 'VeiculoListaView',
    components: {
        Header,
        Select,
        Table,
        Footer,
    },
    data() {
        return {
            veiculoList: new Array<VeiculoModel>(),
            tableColumns: [
                { label: 'ID', field: 'id' },
                { label: 'Ativo', field: 'ativo' },
                { label: 'Placa', field: 'placa' },
                { label: 'Modelo', field: 'modelo.nome' },
                { label: 'Ano', field: 'ano' },
                { label: 'Tipo', field: 'tipo' }
            ]
        }
    },
    mounted() {
        this.findAll();
    },
    methods: {
        findAll() {
            VeiculoClient.listaAll()
                .then((success: VeiculoModel[]) => {
                    console.log(success);
                    this.veiculoList = success;
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
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(121, 121, 121, 0.1)), url(../../assets/EstacionamentoHome.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>