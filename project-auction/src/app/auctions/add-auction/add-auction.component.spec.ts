import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAuctionComponent } from './add-auction.component';

describe('AddAuctionComponent', () => {
  let component: AddAuctionComponent;
  let fixture: ComponentFixture<AddAuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
