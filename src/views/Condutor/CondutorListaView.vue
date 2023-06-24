<template>
    <div class="home">
        <div class="img_background"></div>
        <Header />
        <Select />
        <Table :items="condutorList" :columns="tableColumns" />
        <Footer />
    </div>
</template>
<script lang="ts">
import Header from '../../components/Header.vue';
import Select from '../../components/Select.vue';
import Table from '../../components/Table.vue';
import Footer from '../../components/Footer.vue';

import { defineComponent } from 'vue';
import CondutorClient from '@/client/condutor.client';
import { CondutorModel } from '@/model/CondutorModel';

export default defineComponent({
    name: 'CondutorListaView',
    components: {
        Header,
        Select,
        Table,
        Footer,
    },
    data() {
        return {
            condutorList: new Array<CondutorModel>(),
            tableColumns: [
                { label: 'ID', field: 'id' },
                { label: 'Ativo', field: 'ativo' },
                { label: 'Nome', field: 'nome' },
                { label: 'CPF', field: 'cpf' },
                { label: 'Telefone', field: 'telefone' },
                { label: 'Pago', field: 'tempoPago' },
                { label: 'Desconto', field: 'tempoDesconto' },
            ]
        }
    },
    mounted() {
        this.findAll();
    },
    methods: {
        findAll() {
            CondutorClient.listaAll()
                .then((success: CondutorModel[]) => {
                    console.log(success);
                    this.condutorList = success;
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