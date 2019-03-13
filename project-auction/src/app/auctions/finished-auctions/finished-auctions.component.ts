import { LiteralService } from './../../i18n/literal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finished-auctions',
  templateUrl: './finished-auctions.component.html',
  styleUrls: ['./finished-auctions.component.scss']
})
export class FinishedAuctionsComponent implements OnInit {
  public literals = {};

  constructor(private _literalsService: LiteralService) {
    this.literals = this._literalsService.literalsAuction['finishedAuctions'];
  }

  ngOnInit() {
  }

}
