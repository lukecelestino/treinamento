import { Component, OnInit } from '@angular/core';
import { AuctionsResponse } from '../auction';
import { AuctionsService } from '../auctions.service';

@Component({
  selector: 'app-my-auctions',
  templateUrl: './my-auctions.component.html',
  styleUrls: ['./my-auctions.component.scss']
})
export class MyAuctionsComponent implements OnInit {
  public myAuctions: AuctionsResponse;

  constructor(private _auctionsService: AuctionsService) { }

  ngOnInit() {
    this._auctionsService.getMyAuctions().subscribe( response  => {
      this.myAuctions = response;
    });
  }

}
