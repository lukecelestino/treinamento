import { AuctionsModule } from './auctions/auctions.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { ThfI18nModule, ThfI18nConfig } from '@totvs/thf-ui/services/thf-i18n';
import { ThfModule } from '@totvs/thf-ui';
import { ThfPageLoginModule } from '@totvs/thf-templates/components/thf-page-login';


import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { LiteralService } from './i18n/literal.service';
import { generalEn } from './i18n/general-en';
import { generalPt } from './i18n/general-pt';
import { auctionPt } from './i18n/auction-pt';
import { InterceptorModule } from './interceptor/interceptor.module';

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
    auction: {
      'pt-BR': auctionPt,
    }
  }
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThfModule,
    ThfI18nModule.config(i18nConfig),
    AuctionsModule,
    ThfPageLoginModule,
    InterceptorModule
  ],
  providers: [LiteralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
