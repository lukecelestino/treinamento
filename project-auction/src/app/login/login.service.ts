import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { HttpService } from './../shared/services/http.service';
import { Login, LoginResponse } from './login';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpService) { }

  loginUser(data: Login): Observable<any> {

    data.email = data.login;

    return this._http.post('/auth/new', data).pipe(
      map((res: LoginResponse) => {
        this.saveToken('access_token', res.access_token);
        this.saveToken('refresh_token', res.refresh_token);
      })
    );
  }



  private saveToken(key, value) {
    localStorage.setItem(key, value);
  }


}
