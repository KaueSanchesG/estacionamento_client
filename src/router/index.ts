import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ConfiguracaoFormView from "../views/ConfiguracaoFormView.vue";
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
    path: "/configuracao/formulario",
    name: "configuracao-formulario",
    component: ConfiguracaoFormView,
    children: [
      {
        path: "/configuracao/formulario/:id",
        name: "configuracao-formulario-editar",
        component: ConfiguracaoFormView,
      },
    ],
  },
  {
    path: "/movimentacao/lista",
    name: "movimentacao-lista",
    component: MovimentacaoView,
  },
  {
    path: "/movimentacao/formulario",
    name: "movimentacao-formulario",
    component: MovimentacaoFormView,
    children: [
      {
        path: "/movimentacao/formulario/:id",
        name: "movimentacao-formulario-editar",
        component: MovimentacaoFormView,
      },
    ],
  },
  {
    path: "/condutor/lista",
    name: "condutor-lista",
    component: CondutorListaView,
  },
  {
    path: "/condutor/formulario",
    name: "condutor-formulario",
    component: CondutorFormView,
    children: [
      {
        path: "/condutor/formulario/:id",
        name: "condutor-formulario-editar",
        component: CondutorFormView,
      },
    ],
  },
  {
    path: "/veiculo/lista",
    name: "veiculo-lista",
    component: VeiculoListaView,
  },
  {
    path: "/veiculo/formulario",
    name: "veiculo-formulario",
    component: VeiculoFormView,
    children: [
      {
        path: "/veiculo/formulario/:id",
        name: "veiculo-formulario-editar",
        component: VeiculoFormView,
      },
    ],
  },
  {
    path: "/modelo/lista",
    name: "modelo-lista",
    component: ModeloListaView,
  },
  {
    path: "/modelo/formulario",
    name: "modelo-formulario",
    component: ModeloFormView,
    children: [
      {
        path: "/modelo/formulario/:id",
        name: "modelo-formulario-editar",
        component: ModeloFormView,
      },
    ],
  },
  {
    path: "/marca/lista",
    name: "marca-lista",
    component: MarcaListaView,
  },
  {
    path: "/marca/formulario",
    name: "marca-formulario",
    component: MarcaFormView,
    children: [
      {
        path: "/marca/formulario/:id",
        name: "marca-formulario-editar",
        component: MarcaFormView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
