import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatePollListComponent } from './state-poll-list.component';

describe('StatePollListComponent', () => {
  let component: StatePollListComponent;
  let fixture: ComponentFixture<StatePollListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatePollListComponent]
    });
    fixture = TestBed.createComponent(StatePollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
