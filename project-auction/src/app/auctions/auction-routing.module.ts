import { OpenAuctionsComponent } from './open-auctions/open-auctions.component';
import { AddAuctionComponent } from './add-auction/add-auction.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './../home/home.component';

const auctionRoutes: Routes = [
    { path: 'auction/home', component: HomeComponent },
    { path: 'auction/add-auction', component: AddAuctionComponent },
    { path: 'auction/open-auctions', component: OpenAuctionsComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(auctionRoutes)],
    exports: [RouterModule]
})
export class AuctionRoutingModule {}
