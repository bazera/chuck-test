import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    RandomJokeComponent,
    CategoriesComponent,
    JokeComponent,
    ContainerComponent,
    SearchComponent,
    JokeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: API_BASE,
      useValue: environment.apiBase,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
