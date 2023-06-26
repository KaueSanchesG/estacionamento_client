<template>
    <div class="home">
        <div class="img_background_view"></div>
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
                { label: 'Placa', field: 'veiculo.placa' },
                { label: 'Entrada', field: 'entrada' },
                { label: 'Saída', field: 'saida' }
            ]
        };
    },
    mounted() {
        this.findAll();
    },
    methods: {
        findAll() {
            MovimentacaoClient.findAll()
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
  

  