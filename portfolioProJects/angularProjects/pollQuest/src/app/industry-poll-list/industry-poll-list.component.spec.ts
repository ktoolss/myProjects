import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryPollListComponent } from './industry-poll-list.component';

describe('IndustryPollListComponent', () => {
  let component: IndustryPollListComponent;
  let fixture: ComponentFixture<IndustryPollListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustryPollListComponent]
    });
    fixture = TestBed.createComponent(IndustryPollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
