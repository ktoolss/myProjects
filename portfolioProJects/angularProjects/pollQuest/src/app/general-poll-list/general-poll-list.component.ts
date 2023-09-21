import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll, mockPolls } from '../poll/poll.types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-general-poll-list',
  templateUrl: './general-poll-list.component.html',
  styleUrls: ['./general-poll-list.component.css']
})
export class GeneralPollListComponent implements OnInit {
  generalPolls: Poll[] = [];
  basePolls: Poll[] = mockPolls;  // Keep a reference to your mock polls.
  private pollSubscription!: Subscription;

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
    this.basePolls = mockPolls;  // Your initial polls

    this.pollSubscription = this.pollService.getPolls().subscribe(servicePolls => {
        console.log("Received updated polls:", servicePolls);
        const allPolls = [...this.basePolls, ...servicePolls];
        this.generalPolls = allPolls;  // Filtering based on type, if necessary
    });
  }


  ngOnDestroy(): void {
    // Always unsubscribe from observables to avoid memory leaks.
    if (this.pollSubscription) {
      this.pollSubscription.unsubscribe();
    }
  }
}
