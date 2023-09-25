import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingPollListComponent } from './marketing-poll-list.component';

describe('MarketingPollListComponent', () => {
  let component: MarketingPollListComponent;
  let fixture: ComponentFixture<MarketingPollListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingPollListComponent]
    });
    fixture = TestBed.createComponent(MarketingPollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
