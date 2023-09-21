import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Poll, PollType } from '../poll/poll.types';
import { Subscription } from 'rxjs';
import { PollService } from '../poll.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent {
  public generalPolls: Poll[] = [];
  public industryPolls: Poll[] = [];
  private pollUpdateSubscription1!: Subscription;
  private pollUpdateSubscription2!: Subscription;

  constructor(private pollService: PollService, private router: Router) { }

  ngOnInit(): void {
    this.updatePolls();

    this.pollUpdateSubscription1 = this.pollService.getPolls().subscribe(() => {
      this.updatePolls();
    });

    this.pollUpdateSubscription2 = this.pollService.getPolls().subscribe(() => {
      this.generalPolls = this.pollService.getPollsByType(PollType.General);
      this.industryPolls = this.pollService.getPollsByType(PollType.Industry);
    });
  }

  private updatePolls(): void {
    this.generalPolls = this.pollService.getPollsByType(PollType.General);
    this.industryPolls = this.pollService.getPollsByType(PollType.Industry);
  }

  onPollSelected(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedPollId = +selectElement.value;  // Convert string to number using `+`
    this.router.navigate(['/polls/poll', selectedPollId]);
  }



  ngOnDestroy(): void {
    this.pollUpdateSubscription1.unsubscribe();
    this.pollUpdateSubscription2.unsubscribe();
  }
}