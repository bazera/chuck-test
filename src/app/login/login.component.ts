import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.loggedIn = true;
    localStorage.setItem('loggedIn', 'true');
    this.router.navigate(['']);
  }

  ngOnInit(): void {}
}
