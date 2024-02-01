import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from '../Model/LoginUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl: string = 'https://dummyjson.com/auth/login';


  constructor(private http: HttpClient) {

   }

   login(user: LoginUser):Observable<any>{
      return this.http.post<any>(this.loginUrl, user, {headers: { 'Content-Type': 'application/json' }})
   }
}
