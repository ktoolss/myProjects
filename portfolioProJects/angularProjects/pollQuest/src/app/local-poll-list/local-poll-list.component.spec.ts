import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalPollListComponent } from './local-poll-list.component';

describe('LocalPollListComponent', () => {
  let component: LocalPollListComponent;
  let fixture: ComponentFixture<LocalPollListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalPollListComponent]
    });
    fixture = TestBed.createComponent(LocalPollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
