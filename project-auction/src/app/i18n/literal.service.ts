import { ThfI18nService } from '@totvs/thf-ui/services/thf-i18n';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LiteralService {

  public literals = {};

  constructor(private thfi18nService: ThfI18nService) {
    this.thfi18nService.getLiterals({language: navigator.language})
      .subscribe(response => this.literals = response);
  }
}
