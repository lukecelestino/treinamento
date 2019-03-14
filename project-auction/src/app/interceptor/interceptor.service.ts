import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { catchError, flatMap } from 'rxjs/operators';
import * as HttpStatusCodes from 'http-status-codes';
import { HttpService } from '../shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private _http: HttpService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const request = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.access_token}`
      }
    });

    return next.handle(request)
      .pipe(
        catchError(error => {
          if (error.status === HttpStatusCodes.UNAUTHORIZED) {
            return this.refreshToken({
              refresh_token: localStorage.refresh_token
            }).pipe(
              flatMap(response => {
                const requestRefresh = req.clone({
                  setHeaders: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${response['access_token']}`
                  }
                });
                return next.handle(requestRefresh);
              })
            ) //flatMap vs Map

          }
        })
      )
  }
  refreshToken(refreshToken) {
    return this._http.post('/auth/refresh', refreshToken);
  }
}
