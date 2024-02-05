import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import DemandeSpe from '../models/demande-spe.model';
import DemandeSpeUser from '../models/demande-spe-user.model';

@Injectable({
  providedIn: 'root'
})
export class DemandeSpeService {

  
  private apiUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  getDemandeSpes(): Observable<DemandeSpe[]> {
    return this.httpClient.get<DemandeSpe[]>(`${this.apiUrl}/demandes/all`);
  }

  getDemandeSpe(id: number): Observable<DemandeSpe> {
    return this.httpClient.get<DemandeSpe>(`${this.apiUrl}/demandes/${id}`);
  }

  createDemandeSpeUser(DemandeSpeUser : DemandeSpeUser): Observable<DemandeSpeUser>{
    return this.httpClient.post<DemandeSpeUser>(`${this.apiUrl}/users/save`, DemandeSpeUser);

  }
  
  createDemandeSpe(DemandeSpe: DemandeSpe): Observable<DemandeSpe> {
    console.log(DemandeSpe);
    return this.httpClient.post<DemandeSpe>(`${this.apiUrl}/demandes/save`, DemandeSpe);
  }

  updateDemandeSpe(DemandeSpe: DemandeSpe): Observable<DemandeSpe> {
    return this.httpClient.put<DemandeSpe>(`${this.apiUrl}/demandes/update`, DemandeSpe);
  }

  
}
