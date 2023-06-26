<template>
    <div class="img_background_form"></div>
    <Header />
    <div class="outterContainer">
        <div class="nomeRota">{{ nomeRota }}</div>
        <form class="formContainer">
            <div class="temp">
                <label class="label" for="marca_nome">Marca</label>
                <input name="marca_nome" placeholder="Digite o nome da marca" type="text" class="estilo"
                    v-model="lista.nome">
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
import MarcaClient from '@/client/marca.client';
import { MarcaModel } from '@/model/MarcaModel';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'MovimentacaoFormView',
    data() {
        return {
            lista: new MarcaModel(),
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
            MarcaClient.cadastrar(this.lista)
                .then((success) => {
                    this.lista = new MarcaModel();
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