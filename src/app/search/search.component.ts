import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import { ChuckApiService } from '../chuck-api.service';
import { QueryResult } from '../chuck.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  search = new FormControl();

  result$: Observable<QueryResult> | undefined;

  constructor(
    private apiService: ChuckApiService,
    private toastr: ToastrService
  ) {}

  private getEmptyResult() {
    const empty: QueryResult = {
      result: [],
      total: 0,
    };

    return of(empty);
  }

  ngOnInit(): void {
    this.result$ = this.search.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query) => {
        if (query.length > 3 && query.length < 120) {
          return this.apiService.searchJoke(query);
        }

        return this.getEmptyResult();
      }),
      catchError((error: HttpErrorResponse) => {
        this.toastr.error(error.error.message);

        return this.getEmptyResult();
      })
    );
  }
}
