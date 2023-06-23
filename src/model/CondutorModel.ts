import { AbstractEntityModel } from "./AbstractEntityModel";

export class CondutorModel extends AbstractEntityModel {
  nome!: string;
  cpf!: string;
  telefone!: string;
  tempoPago!: Date;
  temmpoDesconto!: Date;
}
