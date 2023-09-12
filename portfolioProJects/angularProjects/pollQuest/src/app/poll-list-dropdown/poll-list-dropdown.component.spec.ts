import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollListDropdownComponent } from './poll-list-dropdown.component';

describe('PollListDropdownComponent', () => {
  let component: PollListDropdownComponent;
  let fixture: ComponentFixture<PollListDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PollListDropdownComponent]
    });
    fixture = TestBed.createComponent(PollListDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
