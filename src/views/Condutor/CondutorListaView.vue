<template>
    <div class="home">
        <div class="img_background_view"></div>
        <Header />
        <Select />
        <Table :items="condutorList" :columns="tableColumns" :deleteClick="deleteItem" :editClick="editItem" />
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
            CondutorClient.findAll()
                .then((success: CondutorModel[]) => {
                    console.log(success);
                    this.condutorList = success;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        deleteItem(id: number) {
            if (confirm('Tem certeza de que deseja excluir esta marca?')) {
                CondutorClient.excluir(id)
                    .then((sucess) => {
                        this.findAll();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        editItem(id: number) {
            this.$router.push({ name: 'condutor-formulario-editar', params: { id: id } });
        }
    },
})
</script>