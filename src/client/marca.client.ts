import { MarcaModel } from "@/model/MarcaModel";
import axios, { AxiosInstance } from "axios";

export class MarcaClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api/marca",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  public async findById(id: number): Promise<MarcaModel> {
    try {
      return (await this.axiosClient.get<MarcaModel>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async cadastrar(marca: MarcaModel): Promise<void> {
    try {
      return await this.axiosClient.post("/", marca);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async editar(marca: MarcaModel): Promise<void> {
    try {
      return (await this.axiosClient.put(`/${marca.id}`, marca)).data;
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
