import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SketchComponent } from './sketch/sketch.component';
import { MyAuctionsComponent } from './my-auctions/my-auctions.component';
import { FinishedAuctionsComponent } from './finished-auctions/finished-auctions.component'
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    SketchComponent,
    MyAuctionsComponent,
    FinishedAuctionsComponent
  ],
  exports: [
    SketchComponent,
    MyAuctionsComponent,
    FinishedAuctionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AuctionsModule { }
