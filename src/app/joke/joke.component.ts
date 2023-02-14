import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable, of } from 'rxjs';
import { ChuckApiService } from '../chuck-api.service';
import { Joke } from '../chuck.model';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss'],
})
export class JokeComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ChuckApiService,
    private toastr: ToastrService
  ) {}

  joke$: Observable<Joke | null> | undefined;

  ngOnInit(): void {
    const category = this.activatedRoute.snapshot.paramMap.get('category');

    if (category) {
      this.joke$ = this.apiService.getCategoryJoke(category).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.toastr.error('Not Found Error');
          }

          if (error.status === 403) {
            this.toastr.error('Forbidden');
          }

          return of(null);
        })
      );
    }
  }
}
