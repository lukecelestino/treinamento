import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedAuctionsComponent } from './finished-auctions.component';

describe('FinishedAuctionsComponent', () => {
  let component: FinishedAuctionsComponent;
  let fixture: ComponentFixture<FinishedAuctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedAuctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedAuctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
