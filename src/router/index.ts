import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ReciboView from "../views/ReciboView.vue";
import MovimentacaoView from "../views/MovimentacaoView.vue";
import CondutorListaView from "../views/Condutor/CondutorListaView.vue";
import VeiculoListaView from "../views/Veiculo/VeiculoListaView.vue";
import ModeloListaView from "../views/Modelo/ModeloListaView.vue";
import MarcaListaView from "../views/Marca/MarcaListaView.vue";
import MovimentacaoFormView from "../views/MovimentacaoFormView.vue";
import CondutorFormView from "../views/Condutor/CondutorFormView.vue";
import VeiculoFormView from "../views/Veiculo/VeiculoFormView.vue";
import ModeloFormView from "../views/Modelo/ModeloFormView.vue";
import MarcaFormView from "../views/Marca/MarcaFormView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect: "/movimentacao/lista",
  },
  {
    path: "/recibo",
    name: "recibo",
    component: ReciboView,
  },
  {
    path: "/movimentacao/lista",
    name: "movimentacaolista",
    component: MovimentacaoView,
  },
  {
    path: "/movimentacao/formulario",
    name: "movimentacaoformulario",
    component: MovimentacaoFormView,
  },
  {
    path: "/condutor/lista",
    name: "condutorlista",
    component: CondutorListaView,
  },
  {
    path: "/condutor/formulario",
    name: "condutorformulario",
    component: CondutorFormView,
  },
  {
    path: "/veiculo/lista",
    name: "veiculolista",
    component: VeiculoListaView,
  },
  {
    path: "/veiculo/formulario",
    name: "veiculoformulario",
    component: VeiculoFormView,
  },
  {
    path: "/modelo/lista",
    name: "modelolista",
    component: ModeloListaView,
  },
  {
    path: "/modelo/formulario",
    name: "modeloformulario",
    component: ModeloFormView,
  },
  {
    path: "/marca/lista",
    name: "marcalista",
    component: MarcaListaView,
  },
  {
    path: "/marca/formulario",
    name: "marcaformulario",
    component: MarcaFormView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
