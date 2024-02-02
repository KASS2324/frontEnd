import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import DemandeSpe from '../models/demande-spe.model';

@Injectable({
  providedIn: 'root'
})
export class DemandeSpeService {

  
  private apiUrl = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  getDemandeSpes(): Observable<DemandeSpe[]> {
    return this.httpClient.get<DemandeSpe[]>(`${this.apiUrl}/demande-formation-spe`);
  }

  getDemandeSpe(id: number): Observable<DemandeSpe> {
    return this.httpClient.get<DemandeSpe>(`${this.apiUrl}/demande-formation-spe/${id}`);
  }
  
  createDemandeSpe(DemandeSpe: DemandeSpe): Observable<DemandeSpe> {
    console.log(DemandeSpe);
    return this.httpClient.post<DemandeSpe>(`${this.apiUrl}/demandeSpe`, DemandeSpe);
  }

  updateDemandeSpe(DemandeSpe: DemandeSpe): Observable<DemandeSpe> {
    return this.httpClient.put<DemandeSpe>(`${this.apiUrl}/demande-formation-spe/${DemandeSpe.id}`, DemandeSpe);
  }

  
}
