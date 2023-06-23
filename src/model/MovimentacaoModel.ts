import { AbstractEntityModel } from "./AbstractEntityModel";
import { CondutorModel } from "./CondutorModel";
import { VeiculoModel } from "./VeiculoModel";

export class MovimentacaoModel extends AbstractEntityModel {
  veiculo!: VeiculoModel;
  condutor!: CondutorModel;
  entrada!: Date;
  saida!: Date;
  tempo!: Date;
  tempoDesconto!: Date;
  tempoMulta!: number;
  valorHora!: number;
  valorDesconto!: number;
  valorMulta!: number;
  valorTotal!: number;
  valorMinutoMulta!: number;

  constructor() {
    super();
    this.veiculo = new VeiculoModel();
    this.condutor = new CondutorModel();
  }
}
