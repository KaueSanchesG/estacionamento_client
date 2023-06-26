<template>
    <div class="home">
        <div class="img_background_view"></div>
        <Header />
        <Select />
        <Table :items="modeloList" :columns="tableColumns" :deleteClick="deleteItem" :editClick="editItem" />
        <Footer />
    </div>
</template>
<script lang="ts">
import Header from '../../components/Header.vue';
import Select from '../../components/Select.vue';
import Table from '../../components/Table.vue';
import Footer from '../../components/Footer.vue';

import { defineComponent } from 'vue';
import ModeloClient from '@/client/modelo.client';
import { ModeloModel } from '@/model/ModeloModel';

export default defineComponent({
    name: 'ModeloListaView',
    components: {
        Header,
        Select,
        Table,
        Footer,
    },
    data() {
        return {
            modeloList: new Array<ModeloModel>(),
            tableColumns: [
                { label: 'ID', field: 'id' },
                { label: 'Ativo', field: 'ativo' },
                { label: 'Nome', field: 'nome' },
                { label: 'Marca', field: 'marca.nome' },
            ]
        }
    },
    mounted() {
        this.findAll();
    },
    methods: {
        findAll() {
            ModeloClient.findAll()
                .then((success: ModeloModel[]) => {
                    console.log(success);
                    this.modeloList = success;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        deleteItem(id: number) {
            if (confirm('Tem certeza de que deseja excluir esta marca?')) {
                ModeloClient.excluir(id)
                    .then((sucess) => {
                        this.findAll();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        editItem(id: number) {
            this.$router.push({ name: 'modelo-formulario-editar', params: { id: id } });
        }
    },
})
</script>