import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPollListComponent } from './music-poll-list.component';

describe('MusicPollListComponent', () => {
  let component: MusicPollListComponent;
  let fixture: ComponentFixture<MusicPollListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicPollListComponent]
    });
    fixture = TestBed.createComponent(MusicPollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
