import { ModeloModel } from "@/model/ModeloModel";
import axios, { AxiosInstance } from "axios";

export class ModeloClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api/modelo",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  public async findById(id: number): Promise<ModeloModel> {
    try {
      return (await this.axiosClient.get<ModeloModel>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async cadastrar(modelo: ModeloModel): Promise<void> {
    try {
      return await this.axiosClient.post("/", modelo);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async editar(modelo: ModeloModel): Promise<void> {
    try {
      return (await this.axiosClient.put(`/${modelo.id}`, modelo)).data;
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
