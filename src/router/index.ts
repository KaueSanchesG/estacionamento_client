import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ReciboView from "../views/ReciboView.vue";
import MovimentacaoView from "../views/MovimentacaoView.vue";
import CondutorListaView from "../views/Condutor/CondutorListaView.vue";
import VeiculoListaView from "../views/Veiculo/VeiculoListaView.vue";
import ModeloListaView from "../views/Modelo/ModeloListaView.vue";
import MarcaListaView from "../views/Marca/MarcaListaView.vue";

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
    path: "/condutor/lista",
    name: "condutorlista",
    component: CondutorListaView,
  },
  {
    path: "/veiculo/lista",
    name: "veiculolista",
    component: VeiculoListaView,
  },
  {
    path: "/modelo/lista",
    name: "modelolista",
    component: ModeloListaView,
  },
  {
    path: "/marca/lista",
    name: "marcalista",
    component: MarcaListaView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
