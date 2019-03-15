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
    this.getAuctions();
  }

  getAuctions() {
    this._auctionsService.getSketchsAuctions().subscribe( response  => {
      this.sketchAuctions = response.auctions;
    });
  }

  manageAuction(event) {
    if (event.my_action === 'delete') {
      this._auctionsService.deleteAuction(event.id)
        .subscribe(response => {
          console.log(response);
        }, error => {
          if (error.status === 400) {
            this.getAuctions();
            console.log('Deu boa! mais ou menos.');
          }
        });
    } else {
      this.router.navigate(['auction/add-auction', event.id]);
    }
  }

}
