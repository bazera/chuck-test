import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke, QueryResult } from './chuck.model';
import { API_BASE } from './tokens';

@Injectable({
  providedIn: 'root',
})
export class ChuckApiService {
  constructor(
    private http: HttpClient,
    @Inject(API_BASE) private apiBase: string
  ) {}

  getRandomJoke(): Observable<Joke> {
    return this.http.get<Joke>(`${this.apiBase}/random`);
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiBase}/categories`);
  }

  getCategoryJoke(category: string): Observable<Joke> {
    const params = new HttpParams().set('category', category);

    return this.http.get<Joke>(`${this.apiBase}/random`, {
      params,
    });
  }

  searchJoke(query: string): Observable<QueryResult> {
    const params = new HttpParams().set('query', query);

    return this.http.get<QueryResult>(`${this.apiBase}/search`, {
      params,
    });
  }
}
