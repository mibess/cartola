import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipe } from './equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  private readonly apiBaseUrl: string = environment.API_BASE_URL + '/equipes';

  http = inject(HttpClient);

  getEquipes(): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(`${this.apiBaseUrl}`);
  }

}
