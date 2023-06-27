import { AbstractEntityModel } from "./AbstractEntityModel";

export class ConfiguracaoModel extends AbstractEntityModel {
  valorHora!: number;
  valorMinutoMulta!: number;
  inicioExpediente!: Date;
  fimExpediente!: Date;
  tempoParaDesconto!: number;
  tempoDeDesconto!: number;
  gerarDesconto!: boolean;
  vagasMoto!: number;
  vagasCarro!: number;
  vagasVan!: number;
}
