import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll, mockStatePolls } from '../poll/poll.types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-state-poll-list',
  templateUrl: './state-poll-list.component.html',
  styleUrls: ['./state-poll-list.component.css']
})
export class StatePollListComponent implements OnInit {
  statePolls: Poll[] = [];
  basePolls: Poll[] = mockStatePolls;  // Keep a reference to your mock polls.
  private pollSubscription!: Subscription;

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
    this.basePolls = mockStatePolls;  // Your initial polls

    this.pollSubscription = this.pollService.getPolls().subscribe(servicePolls => {
        console.log("Received updated polls:", servicePolls);
        const allPolls = [...this.basePolls, ...servicePolls.filter(poll => poll.type === 'State')];
        this.statePolls = allPolls;  // Filtering based on type, if necessary
    });
  }

  ngOnDestroy(): void {
    // Always unsubscribe from observables to avoid memory leaks.
    if (this.pollSubscription) {
      this.pollSubscription.unsubscribe();
    }
  }
}
