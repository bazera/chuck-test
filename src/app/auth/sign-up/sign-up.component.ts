import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { AuthApiService } from '../auth-api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private authApiService: AuthApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  register(form: NgForm) {
    this.authApiService.signUp(form.value).subscribe((auth) => {
      this.authService.user = auth;
      localStorage.setItem('access_token', auth.token);
      this.router.navigate(['']);
    });
  }

  ngOnInit(): void {}
}
