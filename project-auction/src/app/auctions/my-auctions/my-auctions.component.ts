import { Component, OnInit } from '@angular/core';
import { AuctionsResponse } from '../auction';
import { AuctionsService } from '../auctions.service';
import { LiteralService } from 'src/app/i18n/literal.service';

@Component({
  selector: 'app-my-auctions',
  templateUrl: './my-auctions.component.html',
  styleUrls: ['./my-auctions.component.scss']
})
export class MyAuctionsComponent implements OnInit {
  public myAuctions;
  public literals = {};

  constructor(private _auctionsService: AuctionsService, private literalsService: LiteralService) {
    this.literals = this.literalsService.literalsAuction['myAuction'];
   }

  ngOnInit() {
    this._auctionsService.getMyAuctions().subscribe( response  => {
      this.myAuctions = response.auctions;
    });
  }

}
