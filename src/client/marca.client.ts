import { MarcaModel } from "@/model/MarcaModel";
import axios, { AxiosInstance, AxiosResponse } from "axios";

class MarcaClient {
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
      return (await this.axiosClient.get<MarcaModel>(`?id=${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findAll(): Promise<MarcaModel[]> {
    try {
      return (await this.axiosClient.get<MarcaModel[]>(`/lista`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async cadastrar(marca: MarcaModel): Promise<string> {
    try {
      return (await this.axiosClient.post<string>(``, marca)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async atualizar(marca: MarcaModel): Promise<string> {
    try {
      return (await this.axiosClient.put(`/${marca.id}`, marca)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async excluir(id: number): Promise<string> {
    try {
      const response: AxiosResponse<string> = await this.axiosClient.delete(
        ``,
        { params: { id } }
      );
      return response.data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}

export default new MarcaClient();
