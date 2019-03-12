import { Component, OnInit } from '@angular/core';
import { AuctionsService } from './../auctions.service';
import { AuctionsResponse } from '../auction';

@Component({
  selector: 'app-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.scss']
})
export class SketchComponent implements OnInit {
  public sketchAuctions: AuctionsResponse;

  constructor(private _auctionsService: AuctionsService) { }

  ngOnInit() {
    this._auctionsService.getSketchsAuctions().subscribe( response  => {
      this.sketchAuctions = response;
    });
  }

}
