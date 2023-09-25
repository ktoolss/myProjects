import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll, mockNationalPolls } from '../poll/poll.types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-national-poll-list',
  templateUrl: './national-poll-list.component.html',
  styleUrls: ['./national-poll-list.component.css']
})
export class NationalPollListComponent implements OnInit {
  nationalPolls: Poll[] = [];
  basePolls: Poll[] = mockNationalPolls;  // Keep a reference to your mock polls.
  private pollSubscription!: Subscription;

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
    this.basePolls = mockNationalPolls;  // Your initial polls

    this.pollSubscription = this.pollService.getPolls().subscribe(servicePolls => {
        console.log("Received updated polls:", servicePolls);
        const allPolls = [...this.basePolls, ...servicePolls.filter(poll => poll.type === 'National')];
        this.nationalPolls = allPolls;  // Filtering based on type, if necessary
    });
  }

  ngOnDestroy(): void {
    // Always unsubscribe from observables to avoid memory leaks.
    if (this.pollSubscription) {
      this.pollSubscription.unsubscribe();
    }
  }
}
