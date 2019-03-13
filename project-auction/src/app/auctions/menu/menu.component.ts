import { LiteralService } from 'src/app/i18n/literal.service';
import { Component, OnInit } from '@angular/core';
import { ThfMenuItem } from '@totvs/thf-ui';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuAuctions: Array<ThfMenuItem>;
  public literals = {};

  constructor(private _literalsService: LiteralService) {
    this.literals = this._literalsService.literals;
  }

  ngOnInit() {
    this.menuAuctions = [
      {label: this.literals['myAuctions'] , link: '/auction'},
      {label: this.literals['addAuction'], link: '/auction/add-auction'},
      {label: this.literals['openAuctions'], link: '/auction/open-auctions'},
    ];
  }

}
