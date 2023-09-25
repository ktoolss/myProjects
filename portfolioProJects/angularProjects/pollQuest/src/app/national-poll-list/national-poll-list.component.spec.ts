import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalPollListComponent } from './national-poll-list.component';

describe('NationalPollListComponent', () => {
  let component: NationalPollListComponent;
  let fixture: ComponentFixture<NationalPollListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NationalPollListComponent]
    });
    fixture = TestBed.createComponent(NationalPollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
