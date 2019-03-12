import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuctionsService {

  constructor(private _http: HttpClient) {
    this._http.get('http://localhost:3000/auctions').subscribe(response => {
      console.log(response);
    })
  }
}
