import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { ChuckApiService } from '../chuck-api.service';
import { Goal, GoalsApiService } from '../goals-api.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  goalText = '';

  goals$: Observable<Goal[]> | undefined;
  currentUser$:
    | Observable<{ id: string; name: string; email: string }>
    | undefined;

  constructor(
    private authService: AuthService,
    private router: Router,
    private goalsApiService: GoalsApiService
  ) {}

  logout() {
    this.authService.logout();
  }

  addGoal() {
    this.goalsApiService
      .setGoal({ text: this.goalText })
      .subscribe(() => this.loadGoals());
  }

  deleteGoal(id: string) {
    this.goalsApiService.deleteGoal(id).subscribe(() => this.loadGoals());
  }

  loadGoals() {
    this.goals$ = this.goalsApiService.getGoals();
  }

  ngOnInit(): void {
    this.loadGoals();
    this.currentUser$ = this.authService.getMe();
  }
}
