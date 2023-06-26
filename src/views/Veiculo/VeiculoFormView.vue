<template>
    <div class="img_background_form"></div>
    <Header />
    <div class="outterContainer">
        <div class="nomeRota">{{ nomeRota }}</div>
        <form class="formContainer">
            <div class="temp">
                <label class="label" for="modelo_placa">Placa</label>
                <input name="modelo_placa" placeholder="EX: ABC1D23" type="text" class="estilo" v-model="lista.placa">
            </div>
            <div class="temp">
                <label for="select_modelo" class="label">Modelo</label>
                <select name="select_modelo" class="label estilo" v-model="lista.modelo">
                    <option :value="item" v-for="item in lista2" :key="item.id">
                        {{ item.nome }}
                    </option>
                </select>
            </div>
            <div class="temp">
                <label class="label" for="modelo_ano">Ano</label>
                <input name="modelo_ano" placeholder="Digite o ano" type="number" min="1950" max="2024" class="estilo"
                    v-model="lista.ano">
            </div>
            <div class="temp">
                <label for="select_cor" class="label">Cor</label>
                <select name="select_cor" class="label estilo slc" v-model="lista.cor">
                    <option :value="option.value" v-for="option in getCor()" :key="option.value">
                        {{ option.label }}
                    </option>
                </select>
            </div>
            <div class="temp">
                <label for="select_tipo" class="label">Tipo</label>
                <select name="select_tipo" class="label estilo slc" v-model="lista.tipo">
                    <option :value="option.value" v-for="option in getTipo()" :key="option.value">
                        {{ option.label }}
                    </option>
                </select>
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
import ModeloClient from '@/client/modelo.client';
import { ModeloModel } from '@/model/ModeloModel';
import { useRouter } from 'vue-router';
import { VeiculoModel } from '@/model/VeiculoModel';
import veiculoClient from '@/client/veiculo.client';
import { CorModel } from '@/model/Enums/CorModel';
import { TipoModel } from '@/model/Enums/TipoModel';

export default defineComponent({
    name: 'MovimentacaoFormView',
    data() {
        return {
            lista: new VeiculoModel(),
            lista2: [] as ModeloModel[],
        }
    },
    mounted() {
        this.rodaLista2();
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
        rodaLista2() {
            ModeloClient.findAll()
                .then((response) => {
                    this.lista2 = response;
                    console.log(response);
                }).catch(error => {
                    console.log(error);
                })
        },
        enviarCadastro() {
            veiculoClient.cadastrar(this.lista)
                .then((success) => {
                    this.lista = new VeiculoModel();
                    console.log(success);
                    this.$router.go(-1);
                }).catch((error) => {
                    console.log(error);
                })
        },
        getCor(): { value: CorModel; label: string }[] {
            const corKeys = Object.keys(CorModel) as (keyof typeof CorModel)[];
            return corKeys
                .filter(key => isNaN(Number(key)))
                .map(key => ({ value: CorModel[key], label: key }));
        },
        getTipo(): { value: TipoModel; label: string }[] {
            const corKeys = Object.keys(TipoModel) as (keyof typeof TipoModel)[];
            return corKeys
                .filter(key => isNaN(Number(key)))
                .map(key => ({ value: TipoModel[key], label: key }));
        }
    }
})
</script>
<style lang="scss"></style>
