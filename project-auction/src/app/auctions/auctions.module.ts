import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SketchComponent } from './sketch/sketch.component';
import { MyAuctionsComponent } from './my-auctions/my-auctions.component';
import { FinishedAuctionsComponent } from './finished-auctions/finished-auctions.component'
import { SharedModule } from '../shared/shared.module';
import { AddAuctionComponent } from './add-auction/add-auction.component';
import { OpenAuctionsComponent } from './open-auctions/open-auctions.component';

import { AuctionRoutingModule } from './auction-routing.module';
import { ThfModule } from '@totvs/thf-ui';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SketchComponent,
    MyAuctionsComponent,
    FinishedAuctionsComponent,
    AddAuctionComponent,
    OpenAuctionsComponent,
    HomeComponent,
    MenuComponent
  ],
  exports: [
    SketchComponent,
    MyAuctionsComponent,
    FinishedAuctionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuctionRoutingModule,
    ThfModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuctionsModule { }
