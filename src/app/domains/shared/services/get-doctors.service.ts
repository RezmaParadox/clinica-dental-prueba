import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResponse } from '../models/doctors.model';

@Injectable({
  providedIn: 'root'
})
export class GetDoctorsService {

  private http = inject(HttpClient);
  private apiUrl = environment.API_URL + 'listaDoctores';

  constructor() { }

  getDoctors() {
    const headers = new HttpHeaders({
      'ordProyecto': environment.APP_ID,
      'ordCandidato': environment.USER_ID
    });
    return this.http.get<ApiResponse>(this.apiUrl, { headers } );
  }
}
