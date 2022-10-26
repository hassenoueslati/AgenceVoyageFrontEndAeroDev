import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Voituree} from "../models/voituree";

@Injectable({
  providedIn: 'root'
})
export class VoitureeService {
  private readonly baseUrl:string="http://localhost:8096/"
  constructor(private httpClient:HttpClient) { }

  public getAllVoituree()
  {
    return this.httpClient.get(this.baseUrl+"Voiturees");
  }

  public getVoituree(id:any){
    return this.httpClient.get(`${this.baseUrl}VoitureeById/${id}`)
  }

  public addVoituree(voituree:any){
    return this.httpClient.post(this.baseUrl+ "addVoituree", voituree);
  }

  public updateVoituree(id:any, Data : any){
    return this.httpClient.put(`${this.baseUrl}updateVoituree/${id}`, Data)
  }

  public DeleteVoituree(id:any){
    return this.httpClient.delete<Voituree>(`${this.baseUrl}deleteVoituree/${id}`)
  }

}
