import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ChuckApiService } from '../chuck-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories$: Observable<string[]> = this.apiService.getCategories();

  form: FormGroup = this.buildForm();

  constructor(private apiService: ChuckApiService) {}

  private buildForm() {
    return new FormGroup({
      rating: new FormControl({ value: 3, disabled: false }),
    });
  }

  toggleDisable() {
    const rating = this.form.controls['rating'];

    if (rating.enabled) {
      rating.disable();
    } else {
      rating.enable();
    }
  }

  submit() {
    console.log(this.form.value.rating);
  }

  ngOnInit(): void {}
}
