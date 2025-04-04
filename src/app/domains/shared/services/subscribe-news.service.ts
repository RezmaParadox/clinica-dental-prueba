import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from '../models/subscribe.model';

@Injectable({
  providedIn: 'root'
})


export class SubscribeNewsService {
  
  private http = inject(HttpClient);
  private apiUrl = environment.API_URL + 'newsletter'

  constructor() { }

  subscribeNews(data: Subscription){
    const headers = new HttpHeaders({
      'ordProyecto': environment.APP_ID,
      'ordCandidato': environment.USER_ID
    });
    return this.http.post<Subscription>(this.apiUrl, data, { headers } );
  }
}
