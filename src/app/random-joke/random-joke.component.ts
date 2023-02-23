import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ChuckApiService } from '../chuck-api.service';
import { Joke, Permission } from '../chuck.model';

@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
  styleUrls: ['./random-joke.component.scss'],
})
export class RandomJokeComponent implements OnInit {
  joke$: Observable<Joke> = this.api.getRandomJoke();

  permissions: Permission | undefined;

  constructor(
    private api: ChuckApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.permissions = this.activatedRoute.snapshot.data['permissions'];
  }
}
