import axios, { AxiosInstance } from "axios";
import { MovimentacaoModel } from "../model/MovimentacaoModel";

class MovimentacaoClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api/movimentacao",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public async findById(id: number): Promise<MovimentacaoModel> {
    try {
      return (await this.axiosClient.get<MovimentacaoModel>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async listaAll(): Promise<MovimentacaoModel[]> {
    try {
      return (await this.axiosClient.get<MovimentacaoModel[]>(`/lista`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async cadastrar(movimentacao: MovimentacaoModel): Promise<void> {
    try {
      return await this.axiosClient.post("/", movimentacao);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async editar(movimentacao: MovimentacaoModel): Promise<void> {
    try {
      return (await this.axiosClient.put(`/${movimentacao.id}`, movimentacao))
        .data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async delete(id: number): Promise<string> {
    try {
      return (await this.axiosClient.delete<string>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}

export default new MovimentacaoClient();
