import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisionPollListComponent } from './television-poll-list.component';

describe('TelevisionPollListComponent', () => {
  let component: TelevisionPollListComponent;
  let fixture: ComponentFixture<TelevisionPollListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelevisionPollListComponent]
    });
    fixture = TestBed.createComponent(TelevisionPollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
