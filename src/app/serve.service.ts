import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse,HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ServeService {
  serverUrl = environment.serverUrl
  constructor(
    private http:HttpClient,
  ) { }

  getdata(data:any) {
    // const payload = new HttpParams().set('username', data.username).set('password', data.password);
    return this.http.post<any>(`${this.serverUrl}/getdata`, data);
  }
}
