import { LiteralService } from 'src/app/i18n/literal.service';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

import { ThfMenuItem } from '@totvs/thf-ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public literals = {};

  constructor(private _literalsService: LiteralService) {
              this.literals = this._literalsService.literals;
            }

  ngOnInit() {

  }

}
