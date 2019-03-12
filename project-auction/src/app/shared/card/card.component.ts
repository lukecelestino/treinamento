import { Component, OnInit, Input } from '@angular/core';
import { LiteralService } from 'src/app/i18n/literal.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('t-name') name;

  @Input('t-base_price') base_price;

  @Input('t-photo_url') image;

  @Input('t-bid_type') bid_type;

  public bid_step;
  @Input('t-bid_step') set formatBidStep(value: number){
    this.bid_step = value || '';
  }

  public literals = {};

  constructor(private literalsService: LiteralService) {
    this.literals = this.literalsService.literals;

    console.log(this.literals);
   }

  ngOnInit() {
    console.log(this.bid_type);
  }

  formatBid(type) {
    return (type === 1) ? 'Lance Livre' : 'Lance Fixo';
  }

}
