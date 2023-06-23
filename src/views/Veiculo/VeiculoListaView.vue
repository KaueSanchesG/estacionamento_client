<template>
    <h2>Veiculo-lista</h2>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import VeiculoClient from '@/client/veiculo.client';
import { VeiculoModel } from '@/model/VeiculoModel';

export default defineComponent({
    name: 'VeiculoListaView',
    data() {
        return {
            veiculoList: new Array<VeiculoModel>(),
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