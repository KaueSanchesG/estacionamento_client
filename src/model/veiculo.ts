import { AbstractEntity } from "./abstract-entity";
import { Modelo } from "./modelo";
import { Cor } from "./cor"
import { Tipo } from "./tipo";

export class Veiculo extends AbstractEntity{
    placa! : string
    modelo! : Modelo
    cor! : typeof Cor 
    tipo! : typeof Tipo
    ano! : number
}