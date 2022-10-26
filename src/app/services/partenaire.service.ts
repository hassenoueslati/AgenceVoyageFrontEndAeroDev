import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Partenaire} from "../models/partenaire";

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {

  private readonly baseUrl:string="localhost:3000/partenaires/"
  constructor(private httpClient:HttpClient) { }

  public getAllPartenaires()
  {
    return this.httpClient.get(this.baseUrl+"all");
  }

  public getPartenaire(id:any){
    return this.httpClient.get(`${this.baseUrl}${id}`)
  }

  public addPartenaire(partenaire:any){
    return this.httpClient.post(this.baseUrl+ "add", partenaire);
  }

  public updatePartenaire(id:any, Data : any){
    return this.httpClient.patch(`${this.baseUrl}edit/${id}`, Data)
  }

  // public DeleteHotel(id:any){
  //   return this.httpClient.delete<Hotel>(`${this.baseUrl}remove-Hotel/${hotelId}`)
  // }

}
