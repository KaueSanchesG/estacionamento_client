import { AbstractEntityModel } from "./AbstractEntityModel";
import { ModeloModel } from "./ModeloModel";
import { CorModel } from "./Enums/CorModel";
import { TipoModel } from "./Enums/TipoModel";

export class VeiculoModel extends AbstractEntityModel {
  placa!: string;
  modelo!: ModeloModel;
  cor!: CorModel;
  tipo!: TipoModel;
  ano!: number;

  constructor() {
    super();
    this.modelo = new ModeloModel();
  }
}
