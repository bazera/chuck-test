import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { AuthApiService } from '../auth-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private authApiService: AuthApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  login(form: NgForm) {
    this.authApiService.signIn(form.value).subscribe((auth) => {
      localStorage.setItem('access_token', auth.token);
      this.router.navigate(['']);
    });
  }

  signUp() {
    this.router.navigate(['register'], { relativeTo: this.activatedRoute });
  }

  ngOnInit(): void {}
}
