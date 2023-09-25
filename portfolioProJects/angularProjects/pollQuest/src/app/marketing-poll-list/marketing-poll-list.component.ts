import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll, mockMarketingPolls } from '../poll/poll.types';  // Make sure to import the specific mock data for Marketing
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-marketing-poll-list',
  templateUrl: './marketing-poll-list.component.html',
  styleUrls: ['./marketing-poll-list.component.css']
})
export class MarketingPollListComponent implements OnInit {
  marketingPolls: Poll[] = [];
  basePolls: Poll[] = mockMarketingPolls;  // Use the specific mock data for Marketing
  private pollSubscription!: Subscription;

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
    this.basePolls = mockMarketingPolls;  // Your initial polls specific to Marketing

    this.pollSubscription = this.pollService.getPolls().subscribe(servicePolls => {
        console.log("Received updated polls:", servicePolls);
        const allPolls = [...this.basePolls, ...servicePolls];
        this.marketingPolls = allPolls.filter(poll => poll.type === 'Marketing');  // Filter based on type
    });
  }

  ngOnDestroy(): void {
    // Always unsubscribe from observables to avoid memory leaks.
    if (this.pollSubscription) {
      this.pollSubscription.unsubscribe();
    }
  }
}
