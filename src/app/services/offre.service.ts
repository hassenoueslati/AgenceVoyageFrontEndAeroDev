import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { offre } from '../models/offre';

@Injectable({
  providedIn: 'root',
})
export class OffreService {
  private readonly baseUrl: string = environment.url + 'offre/';
  constructor(private httpClient: HttpClient) {}

  public retrieveAllOffres() {
    return this.httpClient.get(this.baseUrl + 'retrieve-all-Offres');
  }
  public retrieveOffre(idOffre: any) {
    return this.httpClient.get(`${this.baseUrl}retrieve-Offre/${idOffre}`);
  }

  public addOffre(offre: any) {
    return this.httpClient.post(this.baseUrl + 'add-Offre', offre);
  }

  public modifyOffre(idOffre: any, Data: any) {
    return this.httpClient.put(`${this.baseUrl}modify-Offre/${idOffre}`, Data);
  }

  public Deleteoffre(idOffre: any) {
    return this.httpClient.delete<offre>(
      `${this.baseUrl}remove-Offre/${idOffre}`
    );
  }
}
