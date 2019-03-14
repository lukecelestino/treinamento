import { Component, OnInit } from '@angular/core';
import { ThfSelectOption } from '@totvs/thf-ui';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuctionsService } from '../auctions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-auction',
  templateUrl: './add-auction.component.html',
  styleUrls: ['./add-auction.component.scss']
})
export class AddAuctionComponent implements OnInit {
  public bidTypeOptions: Array<ThfSelectOption>;
  formAuction: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private _auctionsService: AuctionsService,
              private _activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.bidTypeOptions = [
      {label: 'Lance livre', value: 1},
      {label: 'Lance fixo', value: 2},
    ];

    this.formAuction = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      base_price: this.formBuilder.control('', [Validators.required]),
      bid_type: this.formBuilder.control('', [Validators.required]),
      bid_step: this.formBuilder.control('', [Validators.required]),
      photo: this.formBuilder.control('', [Validators.required])
    });

    const id = this._activateRoute.snapshot.params.id;
    if (id) {

    }

  }

  save() {
    this._auctionsService.createAuction(this.formAuction.value)
      .subscribe(response => console.log(response));
  }

}
