import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Goal {
  _id: string;
  user: string;
  text: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root',
})
export class GoalsApiService {
  constructor(private http: HttpClient) {}

  getGoals() {
    return this.http.get<Goal[]>(`${environment.apiBase}/goals`);
  }

  setGoal(body: { text: string }) {
    return this.http.post<Goal>(`${environment.apiBase}/goals`, body);
  }

  deleteGoal(id: string) {
    return this.http.delete(`${environment.apiBase}/goals/${id}`);
  }
}
