import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse,HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServeService {
  public changerote = new BehaviorSubject<any>('');
  serverUrl = environment.serverUrl
  constructor(
    private http:HttpClient,
  ) { }

  getdata(data:any) {
    // const payload = new HttpParams().set('username', data.username).set('password', data.password);
    return this.http.post<any>(`${this.serverUrl}/getdata`, data);
  }
  getdropdown(data:any) {
    // const payload = new HttpParams().set('username', data.username).set('password', data.password);
    return this.http.get<any>(`${this.serverUrl}/uploadfolderfile`, data);
  }
  createuserdata(data:any) {
    // const payload = new HttpParams().set('username', data.username).set('password', data.password);
    return this.http.post<any>(`${this.serverUrl}/create-user`, data);
  }
  updateuser(data:any) {
    // const payload = new HttpParams().set('username', data.username).set('password', data.password);
    return this.http.post<any>(`${this.serverUrl}/getparticulardata`, data);
  }
  deleteuser(data:any){
    return this.http.post<any>(`${this.serverUrl}/deletedata`, data);
  }
  uploadfile(data:any){
    return this.http.post<any>(`${this.serverUrl}/uploadfile`, data);
  }
  getfoldernamedata(data:any){
    return this.http.get<any>(`${this.serverUrl}/uploadfolderfile`);
  }
}
