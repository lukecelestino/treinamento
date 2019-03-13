import { LiteralService } from 'src/app/i18n/literal.service';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

import { ThfMenuItem } from '@totvs/thf-ui';

import { AuctionsService } from '../auctions/auctions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public literals;

  public menuAuctions: Array<ThfMenuItem>;

  constructor(private _literalsService: LiteralService,
              private _auctionService: AuctionsService) {
                this.literals = this._literalsService.literals;
             }

  ngOnInit() {
    this.menuAuctions = [
      {label: this.literals['myAuctions'] , link: '/'},
      {label: this.literals['addAuction'], link: '/'},
      {label: this.literals['openAuctions'], link: '/'},
    ];
  }

}
