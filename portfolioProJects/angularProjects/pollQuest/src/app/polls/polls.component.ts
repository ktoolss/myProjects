import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Poll, PollType } from '../poll/poll.types';
import { Subscription } from 'rxjs';
import { PollsService } from '../polls.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent {
  public generalPolls: Poll[] = [];
  public industryPolls: Poll[] = [];
  private pollUpdateSubscription!: Subscription;

  constructor(private pollsService: PollsService, private router: Router) { }

  ngOnInit(): void {
    this.updatePolls();

    this.pollUpdateSubscription = this.pollsService.pollUpdated.subscribe(() => {
      this.updatePolls();
    });

    this.pollUpdateSubscription = this.pollsService.pollUpdated.subscribe(() => {
      this.generalPolls = this.pollsService.getPollsByType(PollType.General);
      this.industryPolls = this.pollsService.getPollsByType(PollType.Industry);
    });
  }

  private updatePolls(): void {
    this.generalPolls = this.pollsService.getPollsByType(PollType.General);
    this.industryPolls = this.pollsService.getPollsByType(PollType.Industry);
  }

  onPollSelected(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedPollId = +selectElement.value;  // Convert string to number using `+`
    this.router.navigate(['/polls/poll', selectedPollId]);
  }



  ngOnDestroy(): void {
    this.pollUpdateSubscription.unsubscribe();
  }
}