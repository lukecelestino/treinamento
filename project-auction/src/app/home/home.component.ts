import { Component, OnInit } from '@angular/core';
import { AuctionsService } from '../auctions/auctions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _auctionService: AuctionsService) { }

  ngOnInit() {
  }

}
