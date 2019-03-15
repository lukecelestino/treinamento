import { Component, OnInit } from '@angular/core';
import { ThfSelectOption } from '@totvs/thf-ui';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuctionsService } from '../auctions.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-auction',
  templateUrl: './add-auction.component.html',
  styleUrls: ['./add-auction.component.scss']
})
export class AddAuctionComponent implements OnInit {
  public bidTypeOptions: Array<ThfSelectOption>;
  formAuction: FormGroup;

  private _id: string;

  constructor(private formBuilder: FormBuilder,
              private _auctionsService: AuctionsService,
              private _activateRoute: ActivatedRoute,
              private _router: Router) { }

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

    this._id = this._activateRoute.snapshot.params.id;
    if (this._id) {
      this._auctionsService.getAuctionById(this._id)
        .subscribe(response => {
          this.formAuction.setValue({
            name: response.name,
            base_price: response.base_price,
            bid_type: response.bid_type,
            bid_step: response.bid_step,
            photo: response.photo
          });
        });
    }

  }

  save() {
    if (this._id) {
      this._auctionsService.editAuction(this._id, this.formAuction.value)
        .subscribe(response => this._router.navigate(['/auction']));
    } else {
      this._auctionsService.createAuction(this.formAuction.value)
        .subscribe(response => this._router.navigate(['/auction']));
    }
  }

}
