import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { ThfI18nModule, ThfI18nConfig } from '@totvs/thf-ui/services/thf-i18n';
import { ThfModule } from '@totvs/thf-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiteralService } from './i18n/literal.service';
import { generalEn } from './i18n/general-en';
import { generalPt } from './i18n/general-pt';
import { HomeComponent } from './home/home.component';
import { SketchComponent } from './auctions/sketch/sketch.component';
import { MyAuctionsComponent } from './auctions/my-auctions/my-auctions.component';
import { FinishedAuctionsComponent } from './auctions/finished-auctions/finished-auctions.component';
import { SharedModule } from './shared/shared.module';

const i18nConfig: ThfI18nConfig = {
  default: {
    language: 'pt-BR',
    context: 'general',
    cache: true
  },
  contexts: {
    general: {
      'pt-BR': generalPt,
      'en-US': generalEn
    },
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SketchComponent,
    MyAuctionsComponent,
    FinishedAuctionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThfModule,
    ThfI18nModule.config(i18nConfig),
    SharedModule
  ],
  providers: [LiteralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
