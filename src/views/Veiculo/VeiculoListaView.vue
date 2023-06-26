<template>
    <div class="home">
        <div class="img_background_view"></div>
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
            VeiculoClient.findAll()
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