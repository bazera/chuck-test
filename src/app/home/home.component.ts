import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChuckApiService } from '../chuck-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories$: Observable<string[]> = this.apiService.getCategories();

  constructor(private apiService: ChuckApiService) {}

  click() {
    console.log('click');
  }

  ngOnInit(): void {}
}
