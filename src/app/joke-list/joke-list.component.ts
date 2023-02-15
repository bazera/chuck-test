import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ChuckApiService } from '../chuck-api.service';
import { Joke } from '../chuck.model';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss'],
})
export class JokeListComponent implements OnInit {
  jokesList$ = this.apiService.getJokeList();

  selectedJokeId: string | undefined;

  @ViewChild('input') input: ElementRef | undefined;

  constructor(
    private apiService: ChuckApiService,
    private toastr: ToastrService
  ) {}

  deleteJoke(id: string) {
    this.apiService.deleteJoke(id).subscribe(() => {
      this.toastr.success('Joke has been deleted');
      this.jokesList$ = this.apiService.getJokeList();
    });
  }

  enterEdit(id: string) {
    this.selectedJokeId = id;
  }

  edit(joke: Joke) {
    const value = this.input?.nativeElement.value;

    this.apiService
      .editJoke(joke.id, {
        ...joke,
        value,
      })
      .subscribe(() => {
        this.toastr.success('Joke has been updated');
        this.cancelEdit();
        this.jokesList$ = this.apiService.getJokeList();
      });
  }

  cancelEdit() {
    this.selectedJokeId = undefined;
  }

  ngOnInit(): void {}
}
