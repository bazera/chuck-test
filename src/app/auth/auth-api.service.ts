import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Auth } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private http: HttpClient) {}

  signUp(payload: { name: string; email: string; password: string }) {
    return this.http.post<Auth>(`${environment.apiBase}/users`, payload);
  }

  signIn(payload: { email: string; password: string }) {
    return this.http.post<Auth>(`${environment.apiBase}/users/login`, payload);
  }
}
