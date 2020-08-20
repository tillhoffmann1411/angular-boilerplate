import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {
  baseUrl = environment.api.url;

  constructor(private http: HttpClient) { }

  signIn(email: string, password: string) {
    return this.http.post(this.baseUrl + '/users/signin', { email, password }, { withCredentials: true }).toPromise();
  }

  signUp(name: string, email: string, password: string) {
    return this.http.post(this.baseUrl + '/users/signup', { name, email, password }, { withCredentials: true }).toPromise();
  }
}