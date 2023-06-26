<template>
    <div class="img_background_form"></div>
    <Header />
    <div class="outterContainer">
        <div class="nomeRota">{{ nomeRota }}</div>
        <form class="formContainer">
            <div class="temp">
                <label class="label" for="condutor_nome">Nome</label>
                <input name="condutor_nome" placeholder="Digite o nome" type="text" class="estilo" v-model="lista.nome">
            </div>
            <div class="temp">
                <label class="label" for="cpf">CPF</label>
                <input name="cpf" placeholder="Digite o CPF" type="text" class="estilo" v-model="lista.cpf">
            </div>
            <div class="temp">
                <label class="label" for="telefone">Telefone</label>
                <input name="telefone" placeholder="EX: 45998910379" type="text" class="estilo" v-model="lista.telefone">
            </div>
        </form>
        <div class="botoes">
            <button type="button" class="btn btn-danger but" @click="voltar">Voltar</button>
            <button type="button" class="btn btn-success but" @click="enviarCadastro">Enviar</button>
        </div>
    </div>
    <Footer />
</template>
  
<script lang="ts">
import Form from '@/components/Form.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { CondutorModel } from '@/model/CondutorModel';
import condutorClient from '@/client/condutor.client';

export default defineComponent({
    name: 'MovimentacaoFormView',
    data() {
        return {
            lista: new CondutorModel(),
        }
    },
    components: {
        Header,
        Form,
        Footer,
    },
    computed: {
        nomeRota(): string {
            const rotaAtual = useRouter().currentRoute.value.fullPath;
            const partesRota = rotaAtual.split('/');
            const nomeRota = partesRota[1];
            if (nomeRota) {
                return nomeRota + ' Cadastra';
            }
            return '';
        }
    },
    methods: {
        voltar() {
            this.$router.go(-1);
        },
        enviarCadastro() {
            condutorClient.cadastrar(this.lista)
                .then((success) => {
                    this.lista = new CondutorModel();
                    console.log(success);
                    this.$router.go(-1);
                }).catch((error) => {
                    console.log(error);
                })
        }
    }
})
</script>
<style lang="scss"></style>