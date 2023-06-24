<template>
    <div class="img_background_form"></div>
    <Header />
    <Form :fields="formFields" />
    <Footer />
</template>

<script lang="ts">
import Form from '@/components/Form.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'
import MovimentacaoClient from '@/client/movimentacao.client';
import { MovimentacaoModel } from '@/model/MovimentacaoModel';

import { defineComponent } from 'vue';

export default defineComponent({
    nam: 'MovimentacaoFormView',
    data() {
        return {
            formFields: [
                { label: 'Condutor', name: 'selectField', type: 'select', options: ['Opção 1', 'Opção 2', 'Opção 3'] },
                { label: 'Veiculo', name: 'selectField', type: 'select', options: ['Opção 1', 'Opção 2', 'Opção 3'] },
                { label: 'Entrada', name: 'timeField', type: 'time' },
                { label: 'Saída', name: 'timeField', type: 'time' },
            ]
        }
    },
    components: {
        Header,
        Form,
        Footer,
    },
})
</script>
