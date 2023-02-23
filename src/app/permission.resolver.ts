import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { delay, finalize, Observable, of } from 'rxjs';
import { ChuckApiService } from './chuck-api.service';
import { Permission } from './chuck.model';
import { LoadingService } from './shared/loading.service';

@Injectable({ providedIn: 'root' })
export class PermissionResolver implements Resolve<Permission> {
  constructor(
    private apiService: ChuckApiService,
    private loadingService: LoadingService
  ) {}

  resolve(): Permission | Observable<Permission> | Promise<Permission> {
    this.loadingService.start();
    return this.apiService
      .getPermission()
      .pipe(finalize(() => this.loadingService.stop()));
  }
}
