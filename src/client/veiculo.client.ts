import { VeiculoModel } from "@/model/VeiculoModel";
import axios, { AxiosInstance } from "axios";

export class VeiculoClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api/veiculo",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  public async findById(id: number): Promise<VeiculoModel> {
    try {
      return (await this.axiosClient.get<VeiculoModel>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async cadastrar(veiculo: VeiculoModel): Promise<void> {
    try {
      return await this.axiosClient.post("/", veiculo);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async editar(veiculo: VeiculoModel): Promise<void> {
    try {
      return (await this.axiosClient.put(`/${veiculo.id}`, veiculo)).data;
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
