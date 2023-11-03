import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  loginUrl = 'https://localhost:7073/api/Account/Login';

  login(data:any){
   return this.http.post(this.loginUrl, data);
 }
}
