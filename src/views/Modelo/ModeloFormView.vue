<template>
    <div class="img_background_form"></div>
    <Header />
    <div class="outterContainer">
        <div class="nomeRota">{{ nomeRota }}</div>
        <form class="formContainer">
            <div class="temp">
                <label class="label" for="modelo_nome">Modelo</label>
                <input name="modelo_nome" placeholder="Digite o nome do modelo" type="text" class="estilo"
                    v-model="lista.nome">
            </div>
            <div class="temp">
                <label class="label">Marca</label>
                <select class="label estilo" v-model="lista.marca">
                    <option :value="item" v-for="item in lista2" :key="item.id">
                        {{ item.nome }}
                    </option>
                </select>
            </div>
        </form>
        <div class="botoes">
            <button type="button" class="btn btn-danger but" @click="voltar">Voltar</button>
            <button type="button" class="btn btn-success but" @click="enviarDados">Enviar</button>
        </div>
    </div>
    <Footer />
</template>
  
<script lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'
import { defineComponent } from 'vue';
import ModeloClient from '@/client/modelo.client';
import { ModeloModel } from '@/model/ModeloModel';
import { useRouter } from 'vue-router';
import { MarcaModel } from '@/model/MarcaModel';
import marcaClient from '@/client/marca.client';

export default defineComponent({
    name: 'MovimentacaoFormView',
    data() {
        return {
            lista: new ModeloModel(),
            lista2: [] as MarcaModel[],
        }
    },
    mounted() {
        this.rodaLista2();
    },
    components: {
        Header,
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
        rodaLista2() {
            marcaClient.findAll()
                .then((response) => {
                    this.lista2 = response;
                    console.log(response);
                }).catch(error => {
                    console.log(error);
                })
        },
        enviarDados() {
            console.log('ID:', this.lista.id);
            console.log('Lista:', this.lista);
            if (this.lista.id) {
                ModeloClient.editar(this.lista.id, this.lista)
                    .then(() => {
                        this.$router.push({ name: 'modelo-lista' });
                    })
                    .catch((error) => {
                        console.log(error.data);
                    });
            } else {
                ModeloClient.cadastrar(this.lista)
                    .then((success) => {
                        this.lista = new ModeloModel();
                        console.log(success);
                        this.$router.go(-1);
                    }).catch((error) => {
                        console.log(error);
                    })
            }
        }
    },
    created() {
        const id = Number(this.$route.params.id);

        if (!isNaN(id)) {
            ModeloClient.findById(id)
                .then((e) => {
                    this.lista = e;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
})
</script>
<style lang="scss"></style>