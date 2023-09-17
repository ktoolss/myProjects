import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPollListComponent } from './general-poll-list.component';

describe('GeneralPollListComponent', () => {
  let component: GeneralPollListComponent;
  let fixture: ComponentFixture<GeneralPollListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralPollListComponent]
    });
    fixture = TestBed.createComponent(GeneralPollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
