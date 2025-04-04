import { inject,Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Date } from '../models/date.model';

@Injectable({
  providedIn: 'root'
})
export class CreateDateService {

  private http = inject(HttpClient);
  private apiUrl = environment.API_URL + 'mensaje';

  constructor() { }

  createDate(data: Date) {
    const headers = new HttpHeaders({
      'ordProyecto': environment.APP_ID,
      'ordCandidato': environment.USER_ID
    });
    return this.http.post<Date>(this.apiUrl, data, { headers } );
  }
}
