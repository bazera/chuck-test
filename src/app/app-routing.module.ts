import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessGuard, AnonymGuard, AuthGuard } from './guards';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeComponent } from './joke/joke.component';
import { LoginComponent } from './auth/login/login.component';
import { PermissionResolver } from './permission.resolver';
import { RandomJokeComponent } from './random-joke/random-joke.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [AnonymGuard],
  },
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'random',
        component: RandomJokeComponent,
        resolve: {
          permissions: PermissionResolver,
        },
      },
      {
        path: 'category/:category',
        component: JokeComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
        canActivate: [AccessGuard],
      },
      {
        path: 'list',
        component: JokeListComponent,
      },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
