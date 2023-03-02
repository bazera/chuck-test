import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('access_token');

    if (accessToken) {
      req = req.clone({
        setHeaders: {
          authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
    }

    return next.handle(req);
  }
}
