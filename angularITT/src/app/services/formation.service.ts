import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Formation from '../models/formation.model';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private apiUrl = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  getFormations(): Observable<Formation[]> {
    return this.httpClient.get<Formation[]>(`${this.apiUrl}/formations`);
  }

  getFormation(id: number): Observable<Formation> {
    return this.httpClient.get<Formation>(`${this.apiUrl}/formations/${id}`);
  }

  createFormation(formation: Formation): Observable<Formation> {
    return this.httpClient.post<Formation>(`${this.apiUrl}/formations`, formation);
  }

  updateFormation(formation: Formation): Observable<Formation> {
    return this.httpClient.put<Formation>(`${this.apiUrl}/formations/${formation.id}`, formation);
  }

  getFormationsByVille(ville: string): Observable<Formation[]> {
    return this.httpClient.get<Formation[]>(`${this.apiUrl}/formations?ville=${ville}`);
  }

  getFormationsByTheme(theme: string): Observable<Formation[]> {
    return this.httpClient.get<Formation[]>(`${this.apiUrl}/formations?theme=${theme}`);
  }

  getFormationsByThemeAndVille(theme: string, ville: string): Observable<Formation[]> {
    return this.httpClient.get<Formation[]>(`${this.apiUrl}/formations?theme=${theme}&ville=${ville}`);
  }
}
