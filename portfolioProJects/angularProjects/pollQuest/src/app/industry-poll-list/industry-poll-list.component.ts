// industry-poll-list.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll, mockIndustryPolls } from '../poll/poll.types';  // Adjust to industry polls
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-industry-poll-list',
  templateUrl: './industry-poll-list.component.html',
  styleUrls: ['./industry-poll-list.component.css']
})
export class IndustryPollListComponent implements OnInit, OnDestroy {
  industryPolls: Poll[] = [];
  basePolls: Poll[] = mockIndustryPolls;  // Reference to industry mock polls
  private pollSubscription!: Subscription;

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
    this.basePolls = mockIndustryPolls;

    this.pollSubscription = this.pollService.getPolls().subscribe(servicePolls => {
        console.log("Received updated polls:", servicePolls);
        const allPolls = [...this.basePolls, ...servicePolls];
        this.industryPolls = allPolls;  // If needed, add filtering logic based on poll type.
    });
  }

  ngOnDestroy(): void {
    if (this.pollSubscription) {
      this.pollSubscription.unsubscribe();
    }
  }
}
