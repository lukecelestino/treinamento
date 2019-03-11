import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { ThfI18nModule, ThfI18nConfig } from '@totvs/thf-ui/services/thf-i18n';
import { ThfModule } from '@totvs/thf-ui';

import { AppComponent } from './app.component';

import { LiteralService } from './i18n/literal.service';

import { generalEn } from './i18n/general-en';
import { generalPt } from './i18n/general-pt';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThfModule,
    ThfI18nModule.config(i18nConfig)
  ],
  providers: [LiteralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
