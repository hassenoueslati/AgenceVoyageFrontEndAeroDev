import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Hotel} from "../models/hotel";

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private readonly baseUrl:string=environment.url+"hotel/"
  constructor(private httpClient:HttpClient) { }

  public getAllHotel()
  {
    return this.httpClient.get(this.baseUrl+"retrieve-all-Hotels");
  }

  public getHotel(hotelId:any){
    return this.httpClient.get(`${this.baseUrl}retrieve-Hotel/${hotelId}`)
  }

  public addHotel(hotel:any){
    return this.httpClient.post(this.baseUrl+ "add-Hotel", hotel);
  }

  public updateHotel(hotelId:any, Data : any){
    return this.httpClient.put(`${this.baseUrl}modify-Hotel/${hotelId}`, Data)
  }

  public DeleteHotel(hotelId:any){
    return this.httpClient.delete<Hotel>(`${this.baseUrl}remove-Hotel/${hotelId}`)
  }

}
