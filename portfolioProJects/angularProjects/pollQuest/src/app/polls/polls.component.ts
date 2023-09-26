import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Poll, PollType } from '../poll/poll.types';
import { PollService } from '../poll.service';
import { AnimationToggleService } from '../animation-toggle.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit, OnDestroy {
  public pollsByType: { [key in PollType]?: Poll[] } = {};
  animate = false;
  private pollUpdateSubscription!: Subscription;
  private animationSubscription!: Subscription;

  constructor(
    private pollService: PollService, 
    private router: Router,
    private animationService: AnimationToggleService
  ) {}

  ngOnInit(): void {
    this.updatePolls();

    this.pollUpdateSubscription = this.pollService.getPolls().subscribe(() => {
      this.updatePolls();
    });

    this.animationSubscription = this.animationService.animationEnabled$.subscribe(
      (enabled) => (this.animate = enabled)
    );
  }

  private updatePolls(): void {
    for (const type in PollType) {
      if (Object.prototype.hasOwnProperty.call(PollType, type)) {
        const key = type as keyof typeof PollType;
        this.pollsByType[key] = this.pollService.getPollsByType(key as PollType);
      }
    }
  }

  ngOnDestroy(): void {
    this.pollUpdateSubscription.unsubscribe();
    this.animationSubscription.unsubscribe();
  }
}
