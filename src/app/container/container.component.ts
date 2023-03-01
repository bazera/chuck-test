import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { ChuckApiService } from '../chuck-api.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  get user() {
    return this.authService.user;
  }

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    localStorage.removeItem('access_token');
    this.authService.user = undefined;
    this.router.navigate(['auth']);
  }

  ngOnInit(): void {}
}
