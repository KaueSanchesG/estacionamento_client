<template>
    <div class="recibo">
        <div class="img_background_form"></div>
        <Header />
        <Select />
        <div class="outterContainer">
            <div class="nomeRota">{{ nomeRota }}</div>
            <form class="formContainer">
                <div class="temp">
                    <label class="label">ValorHora</label>
                    <input placeholder="EX: 2.00" type="text" class="estilo" v-model="lista.valorHora">
                </div>
                <div class="temp">
                    <label class="label">ValorMinutoMulta</label>
                    <input placeholder="EX: 1.00" type="text" class="estilo" v-model="lista.valorMinutoMulta">
                </div>
                <div class="temp">
                    <label class="label">InicioExpediente</label>
                    <input type="time" class="estilo time" v-model="lista.inicioExpediente">
                </div>
                <div class="temp">
                    <label class="label">FimExpediente</label>
                    <input type="time" class="estilo time" v-model="lista.fimExpediente">
                </div>
                <div class="temp">
                    <label class="label">TempoParaDesconto</label>
                    <input placeholder="De 1 - 23" type="number" min="0" max="23" class="estilo"
                        v-model="lista.tempoParaDesconto">
                </div>
                <div class="temp">
                    <label class="label">TempoDeDesconto</label>
                    <input placeholder="Digite o tempo de desconto" type="number" class="estilo"
                        v-model="lista.tempoDeDesconto">
                </div>
                <div class="temp">
                    <label class="label">GerarDesconto</label>
                    <div class="slideThree">
                        <input type="checkbox" value="None" id="slideThree" name="check" checked
                            v-model="lista.gerarDesconto" />
                        <label for="slideThree"></label>
                    </div>
                </div>
                <div class="temp">
                    <label class="label">VagasMoto</label>
                    <input placeholder="Digite as vagas de moto" type="number" class="estilo" v-model="lista.vagasMoto">
                </div>
                <div class="temp">
                    <label class="label">VagasCarro</label>
                    <input placeholder="Digite as vagas de carro" type="number" class="estilo" v-model="lista.vagasCarro">
                </div>
                <div class="temp">
                    <label class="label">VagasVan</label>
                    <input placeholder="Digite as vagas de van" type="number" class="estilo" v-model="lista.vagasVan">
                </div>
            </form>
            <div class="botoes">
                <button type="button" class="btn btn-danger but" @click="voltar">Voltar</button>
                <button type="button" class="btn btn-success but" @click="enviarDados">Enviar</button>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script lang="ts">
import Header from '../components/Header.vue';
import Select from '../components/Select.vue';
import Footer from '../components/Footer.vue';
import { defineComponent } from 'vue';
import { ConfiguracaoModel } from '@/model/ConfiguracaoModel';
import { useRouter } from 'vue-router';
import ConfiguracaoClient from '@/client/configuracao.client';

export default defineComponent({
    data() {
        return {
            lista: new ConfiguracaoModel(),
            configuracaoId: null as number | null,
        }
    },
    components: {
        Header,
        Select,
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
        enviarDados() {
            console.log('ID:', this.configuracaoId);
            console.log('Lista:', this.lista);
            if (this.lista.id) {
                ConfiguracaoClient.editar(this.configuracaoId as number, this.lista)
                    .then(() => {
                        this.$router.push({ name: 'movimentacao-lista' });
                    })
                    .catch((error) => {
                        console.log(error.data);
                    });
            } else {
                ConfiguracaoClient.cadastrar(this.lista)
                    .then((success) => {
                        this.lista = new ConfiguracaoModel();
                        console.log(success);
                        this.$router.go(-1);
                    }).catch((error) => {
                        console.log(error);
                    })
            }
        }
    },
    async created() {
        const config = await ConfiguracaoClient.findAll();
        if (config.length > 0) {
            const configID = config[0].id;
            this.configuracaoId = configID;
            this.$router.push({ name: 'configuracao-formulario-editar', params: { id: configID } });
            console.log('ID encontrado:', configID);
        }

        const id = Number(this.configuracaoId);

        if (!isNaN(id)) {
            ConfiguracaoClient.findById(id)
                .then((e) => {
                    this.lista = e;
                    this.configuracaoId = id;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
})
</script>
<style lang="scss">
$activeColor: #27ae60;

.recibo {
    position: relative;
    width: 100vw;
    height: 100vh;
}

.slideThree {
    width: 80px;
    height: 26px;
    background: #333;
    margin: auto;
    position: relative;
    border-radius: 50px;
    box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5), 0px 1px 0px rgba(255, 255, 255, 0.2);

    &:after {
        content: 'OFF';
        color: #000;
        position: absolute;
        right: 10px;
        z-index: 0;
        font: 12px/26px Arial, sans-serif;
        font-weight: bold;
        text-shadow: 1px 1px 0px rgba(255, 255, 255, .15);
    }

    &:before {
        content: 'ON';
        color: $activeColor;
        position: absolute;
        left: 10px;
        z-index: 0;
        font: 12px/26px Arial, sans-serif;
        font-weight: bold;
    }

    label {
        display: block;
        width: 34px;
        height: 20px;
        cursor: pointer;
        position: absolute;
        top: 3px;
        left: 3px;
        z-index: 1;
        background: #fcfff4;
        background: linear-gradient(top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
        border-radius: 50px;
        transition: all 0.4s ease;
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
    }

    input[type=checkbox] {
        visibility: hidden;

        &:checked+label {
            left: 43px;
        }
    }
}
</style>