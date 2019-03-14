import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { HttpService } from './../shared/services/http.service';
import { Observable } from 'rxjs';

import { loginResponse } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpService) { }

  loginUser(data): Observable<any> {
    data.email = data.login;
    return this._http.post('/auth/new', data)
      .pipe(
        tap((res: loginResponse) => {
          this.saveToken('access_token', res.access_token);
          this.saveToken('refresh_token', res.refresh_token);
        })
      );
  }

  private saveToken(key, value) {
    localStorage.setItem(key, value);
}
}
