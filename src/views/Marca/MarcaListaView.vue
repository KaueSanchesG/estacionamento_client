<template>
    <div class="home">
        <div class="img_background_view"></div>
        <Header />
        <Select />
        <Table :items="marcaList" :columns="tableColumns" :deleteClick="deleteItem" :editClick="editItem" />
        <Footer />
    </div>
</template>
<script lang="ts">
import Header from '../../components/Header.vue';
import Select from '../../components/Select.vue';
import Table from '../../components/Table.vue';
import Footer from '../../components/Footer.vue';

import { defineComponent } from 'vue';
import MarcaClient from '@/client/marca.client';
import { MarcaModel } from '@/model/MarcaModel';

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
            marcaList: new Array<MarcaModel>(),
            tableColumns: [
                { label: 'ID', field: 'id' },
                { label: 'Ativo', field: 'ativo' },
                { label: 'Nome', field: 'nome' },
            ]
        }
    },
    mounted() {
        this.findAll();
    },
    methods: {
        findAll() {
            MarcaClient.findAll()
                .then((success: MarcaModel[]) => {
                    console.log(success);
                    this.marcaList = success;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        deleteItem(id: number) {
            if (confirm('Tem certeza de que deseja excluir esta marca?')) {
                MarcaClient.excluir(id)
                    .then((sucess) => {
                        this.findAll();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        editItem(id: number) {
            this.$router.push({ name: 'marca-formulario-editar', params: { id: id } });
        }
    },
})
</script>