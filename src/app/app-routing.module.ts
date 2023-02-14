import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { JokeComponent } from './joke/joke.component';
import { RandomJokeComponent } from './random-joke/random-joke.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
  },
  {
    path: 'random',
    component: RandomJokeComponent,
  },
  {
    path: 'category/:category',
    component: JokeComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
