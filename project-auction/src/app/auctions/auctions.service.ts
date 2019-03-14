import { HttpService } from './../shared/services/http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuctionsResponse } from './auction';

@Injectable({
  providedIn: 'root'
})

export class AuctionsService {

  constructor(private _http: HttpService) {
  }

  public getSketchsAuctions(): Observable<AuctionsResponse> {
    return this._http.get('/auctions', {
      status: 0,
      owner: localStorage.owner
    });

  }

  public getMyAuctions(): Observable<AuctionsResponse> {
    return this._http.get('/auctions', {
      status: 1,
    });
  }

  public createAuction(payload): Observable<AuctionsResponse> {
    return this._http.post('/auctions', payload);
  }

}
