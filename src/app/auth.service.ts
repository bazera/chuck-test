import { Injectable } from '@angular/core';
import { Auth } from './auth/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: Auth | undefined;

  constructor() {}
}
