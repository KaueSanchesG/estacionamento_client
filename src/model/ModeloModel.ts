import { AbstractEntityModel } from "./AbstractEntityModel";
import { MarcaModel } from "./MarcaModel";

export class ModeloModel extends AbstractEntityModel {
  nome!: string;
  marca!: MarcaModel;
}
