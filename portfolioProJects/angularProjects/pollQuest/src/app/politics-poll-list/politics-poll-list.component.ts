import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll, mockPoliticsPolls } from '../poll/poll.types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-politics-poll-list',
  templateUrl: './politics-poll-list.component.html',
  styleUrls: ['./politics-poll-list.component.css']
})
export class PoliticsPollListComponent implements OnInit {
  politicsPolls: Poll[] = [];
  basePolls: Poll[] = mockPoliticsPolls;  // Keep a reference to your mock polls.
  private pollSubscription!: Subscription;

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
    this.basePolls = mockPoliticsPolls;  // Your initial polls

    this.pollSubscription = this.pollService.getPolls().subscribe(servicePolls => {
        console.log("Received updated polls:", servicePolls);
        const allPolls = [...this.basePolls, ...servicePolls.filter(poll => poll.type === 'Politics')];
        this.politicsPolls = allPolls;  // Filtering based on type
    });
  }

  ngOnDestroy(): void {
    // Always unsubscribe from observables to avoid memory leaks.
    if (this.pollSubscription) {
      this.pollSubscription.unsubscribe();
    }
  }
}
