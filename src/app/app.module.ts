import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomJokeComponent } from './random-joke/random-joke.component';
import { CategoriesComponent } from './categories/categories.component';
import { JokeComponent } from './joke/joke.component';
import { ContainerComponent } from './container/container.component';
import { API_BASE } from './tokens';
import { environment } from 'src/environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JokeListComponent } from './joke-list/joke-list.component';
import { HomeComponent } from './home/home.component';
import { RatingComponent } from './rating/rating.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RandomJokeComponent,
    CategoriesComponent,
    JokeComponent,
    ContainerComponent,
    SearchComponent,
    JokeListComponent,
    HomeComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: API_BASE,
      useValue: environment.chuckApiBase,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
