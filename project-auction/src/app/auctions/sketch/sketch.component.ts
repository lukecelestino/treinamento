import { Component, OnInit } from '@angular/core';
import { AuctionsService } from './../auctions.service';
import { AuctionsResponse } from '../auction';
import { LiteralService } from 'src/app/i18n/literal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.scss']
})
export class SketchComponent implements OnInit {
  public sketchAuctions;
  public literals = {};

  constructor(private router: Router,
              private _auctionsService: AuctionsService,
              private literalsService: LiteralService) {
    this.literals = this.literalsService.literalsAuction['sketch'];
   }

  ngOnInit() {
    this._auctionsService.getSketchsAuctions().subscribe( response  => {
      this.sketchAuctions = response.auctions;
    });
  }

  editAuction(event) {
    this.router.navigate(['auction/add-auction', event.id]);
  }

}
