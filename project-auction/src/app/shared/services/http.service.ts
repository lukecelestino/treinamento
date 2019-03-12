import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly URL = 'http://localhost:3000';

  constructor(private _http: HttpClient) {
  }

  public get(endpoint: string, queryParams = {}): Observable<any> {

    const params = new HttpParams({
      fromObject: queryParams
    });

    return this._http.get(this.URL + endpoint, {params});
  }

}
