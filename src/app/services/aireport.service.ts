import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Aireport} from "../models/aireport";

@Injectable({
  providedIn: 'root'
})
export class AireportService {
  private readonly baseUrl:string="http://localhost:8086/airoport/"
  constructor(private httpClient:HttpClient) { }

  public getAllAireport()
  {
    return this.httpClient.get(this.baseUrl+"getAll");
  }

/*  public getAireport(aireportId:any){
    return this.httpClient.get(`${this.baseUrl}retrieve-Hotel/${aireportId}`)
  }*/

  public addAireport(aireport:any){
    return this.httpClient.post(this.baseUrl+ "add-airoport", aireport);
  }

  public updateAireport(aireportId:any, Data : any){
    return this.httpClient.put(`${this.baseUrl}update-airoport/${aireportId}`, Data)
  }

  public DeleteAireport(aireportId:any){
    return this.httpClient.delete<Aireport>(`${this.baseUrl}remove-Airoport/${aireportId}`)
  }
}
