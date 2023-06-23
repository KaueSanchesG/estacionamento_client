import { CondutorModel } from "@/model/CondutorModel";
import axios, { AxiosInstance } from "axios";

export class CondutorClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api/condutor",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  public async findById(id: number): Promise<CondutorModel> {
    try {
      return (await this.axiosClient.get<CondutorModel>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async listaAll(): Promise<CondutorModel[]> {
    try {
      return (await this.axiosClient.get<CondutorModel[]>(`/lista`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async cadastrar(condutor: CondutorModel): Promise<void> {
    try {
      return await this.axiosClient.post("/", condutor);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async editar(condutor: CondutorModel): Promise<void> {
    try {
      return (await this.axiosClient.put(`/${condutor.id}`, condutor)).data;
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
