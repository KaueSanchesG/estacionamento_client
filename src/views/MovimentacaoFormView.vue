<template>
    <h1>Form-Movimentacao</h1>
    <Form :fields="formFields" />
</template>

<script lang="ts">
import Form from '@/components/Form.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    nam: 'MovimentacaoFormView',
    data() {
        return {
            formFields: [
                { label: 'Campo de Texto', name: 'inputField', type: 'input', inputType: 'text' },
                { label: 'Selecionar Opção', name: 'selectField', type: 'select', options: ['Opção 1', 'Opção 2', 'Opção 3'] },
                { label: 'Selecionar Enum', name: 'enumSelectField', type: 'enumSelect', enumOptions: [{ value: 'Valor1', label: 'Opção 1' }, { value: 'Valor2', label: 'Opção 2' }, { value: 'Valor3', label: 'Opção 3' }] },
                { label: 'Horário', name: 'timeField', type: 'time' },
                { label: 'Email', name: 'emailField', type: 'email' }
            ]
        }
    },
    components: {
        Form,
    }
})
</script>