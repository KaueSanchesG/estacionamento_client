<template>
    <div class="img_background_form"></div>
    <Header />
    <div class="outterContainer">
        <div class="nomeRota">{{ nomeRota }}</div>
        <form class="formContainer">
            <div class="temp">
                <label for="select_condutor" class="label">Condutor</label>
                <select name="select_condutor" class="label estilo" v-model="lista.condutor">
                    <option :value="item" v-for="item in lista2" :key="item.id">
                        {{ item.nome }}
                    </option>
                </select>
            </div>
            <div class="temp">
                <label for="select_veiculo" class="label">Veiculo</label>
                <select name="select_veiculo" class="label estilo" v-model="lista.veiculo">
                    <option :value="item" v-for="item in lista3" :key="item.id">
                        {{ item.placa }}
                    </option>
                </select>
            </div>
            <div class="temp">
                <label class="label" for="entrada">Entrada</label>
                <input name="entrada" placeholder="Digite a entrada" type="time" class="estilo time"
                    v-model="lista.entrada">
            </div>
            <div class="temp">
                <label class="label" for="saida">Saída</label>
                <input name="saida" placeholder="Digite a saida" type="time" class="estilo time" v-model="lista.saida">
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
import { useRouter } from 'vue-router';
import { MovimentacaoModel } from '@/model/MovimentacaoModel';
import { CondutorModel } from '@/model/CondutorModel';
import { VeiculoModel } from '@/model/VeiculoModel';
import MovimentacaoClient from '@/client/movimentacao.client';
import condutorClient from '@/client/condutor.client';
import veiculoClient from '@/client/veiculo.client';

export default defineComponent({
    data() {
        return {
            lista: new MovimentacaoModel(),
            lista2: [] as CondutorModel[],
            lista3: [] as VeiculoModel[],
        }
    },
    mounted() {
        this.rodaLista2();
        this.rodaLista3();
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
            condutorClient.findAll()
                .then((response) => {
                    this.lista2 = response;
                    console.log(response);
                }).catch(error => {
                    console.log(error);
                })
        },
        rodaLista3() {
            veiculoClient.findAll()
                .then((response) => {
                    this.lista3 = response;
                    console.log(response);
                }).catch(error => {
                    console.log(error);
                })
        },
        enviarDados() {
            console.log('ID:', this.lista.id);
            console.log('Lista:', this.lista);
            if (this.lista.id) {
                MovimentacaoClient.editar(this.lista.id, this.lista)
                    .then(() => {
                        this.$router.push({ name: 'movimentacao-lista' });
                    })
                    .catch((error) => {
                        console.log(error.data);
                    });
            } else {
                MovimentacaoClient.cadastrar(this.lista)
                    .then((success) => {
                        this.lista = new MovimentacaoModel();
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
            MovimentacaoClient.findById(id)
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
<style lang="scss">
.outterContainer {
    position: relative;
    margin: auto;
    margin-top: 1vw;
    max-width: fit-content;
    max-height: fit-content;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    padding: 0.5vw 0.7vw;
}

.formContainer {
    height: fit-content;
    max-height: 66.4vh;
    width: 70vw;
    background-color: rgba(255, 255, 255, 0.95);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    border-radius: 20px;
    padding: 1vw;
    gap: 0.5vw;
    overflow-y: scroll;
}

.temp {
    display: flex;
    flex-direction: column;
    max-width: 15vw;
    width: calc(50% - 0.5vw);
    margin-bottom: 1vw;
}

.label {
    text-align: center;
    font-size: 1.2vw;
}

.estilo {
    padding: 0.5vw;
    border-radius: 10px;
    border: 2px lightgray solid;
}

.botoes {
    padding: 0.6vw 1vw;
    display: flex;
    justify-content: space-between;
}

.nomeRota {
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    font-weight: bold;
    padding: 0.3vw 0;
    color: white;
    text-shadow: 1px 1px 3px white;
}

.lastElement {
    width: 100%;
    align-self: center;
}

.slc {
    text-transform: lowercase;
    width: 100%;
}

.time {
    text-align: center;
}

.but {
    border: 1px gray solid;
    border-radius: 5px;
    width: fit-content;
    padding: 6px 30px;
}
</style>
  