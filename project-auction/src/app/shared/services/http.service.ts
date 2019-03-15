import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly URL = 'http://10.171.67.175:17114/api/v1';

  constructor(private _http: HttpClient) {
  }

  public get(endpoint: string, queryParams = {}): Observable<any> {

    const params = new HttpParams({
      fromObject: queryParams
    });
    return this._http.get(this.URL + endpoint, {params});
  }

  public post(endpoint: string, payload: object, params = {}): Observable<any> {
    return this._http.post(this.URL + endpoint, payload, params);
  }

  public put(endpoint: string, id: string, payload: object): Observable<any> {
    return this._http.put(this.URL + endpoint + id, payload);
  }

  public delete(endpoint: string, id: string): Observable<any> {
    return this._http.delete(this.URL + endpoint + id);
  }

}
