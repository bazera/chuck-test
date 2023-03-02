import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Auth } from './auth/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  getMe() {
    return this.http.get<{ id: string; name: string; email: string }>(
      `${environment.apiBase}/users/me`
    );
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['auth']);
  }
}
