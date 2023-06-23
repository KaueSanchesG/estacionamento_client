import { ConfiguracaoModel } from "@/model/ConfiguracaoModel";
import axios, { AxiosInstance } from "axios";

export class ConfiguracaoClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api/configuracao",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  public async findById(id: number): Promise<ConfiguracaoModel> {
    try {
      return (await this.axiosClient.get<ConfiguracaoModel>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async listaAll(): Promise<ConfiguracaoModel[]> {
    try {
      return (await this.axiosClient.get<ConfiguracaoModel[]>(`/lista`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async cadastrar(configuracao: ConfiguracaoModel): Promise<void> {
    try {
      return await this.axiosClient.post("/", configuracao);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async editar(configuracao: ConfiguracaoModel): Promise<void> {
    try {
      return (await this.axiosClient.put(`/${configuracao.id}`, configuracao))
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
export default new ConfiguracaoClient();
