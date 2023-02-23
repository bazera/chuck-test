import { Component } from '@angular/core';
import { LoadingService } from './shared/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-chuck-norris';

  get loading$() {
    return this.loadingService.loading$;
  }

  constructor(private loadingService: LoadingService) {}
}
