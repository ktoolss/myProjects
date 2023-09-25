import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticsPollListComponent } from './politics-poll-list.component';

describe('PoliticsPollListComponent', () => {
  let component: PoliticsPollListComponent;
  let fixture: ComponentFixture<PoliticsPollListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliticsPollListComponent]
    });
    fixture = TestBed.createComponent(PoliticsPollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
