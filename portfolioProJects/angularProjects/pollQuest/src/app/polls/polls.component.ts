import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Poll, PollType } from '../poll/poll.types';
import { PollService } from '../poll.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit, OnDestroy {
  public pollsByType: { [key in PollType]?: Poll[] } = {};

  private pollUpdateSubscription!: Subscription;

  constructor(private pollService: PollService, private router: Router) {}

  ngOnInit(): void {
    this.updatePolls();

    this.pollUpdateSubscription = this.pollService.getPolls().subscribe(() => {
      this.updatePolls();
    });
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
  }
}
