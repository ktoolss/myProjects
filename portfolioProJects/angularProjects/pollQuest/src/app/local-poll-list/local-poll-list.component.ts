import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll, mockLocalPolls } from '../poll/poll.types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-local-poll-list',
  templateUrl: './local-poll-list.component.html',
  styleUrls: ['./local-poll-list.component.css']
})
export class LocalPollListComponent implements OnInit {
  localPolls: Poll[] = [];
  basePolls: Poll[] = mockLocalPolls;  // Keep a reference to your mock polls.
  private pollSubscription!: Subscription;

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
    this.basePolls = mockLocalPolls;  // Your initial polls

    this.pollSubscription = this.pollService.getPolls().subscribe(servicePolls => {
        console.log("XXXXXXXXXXXXXXXX:", ...this.basePolls, ...servicePolls);
        const allPolls = [...this.basePolls, ...servicePolls.filter(poll => poll.type === 'Local')];
        this.localPolls = allPolls;  // Filtering based on type
    });
  }

  ngOnDestroy(): void {
    // Always unsubscribe from observables to avoid memory leaks.
    if (this.pollSubscription) {
      this.pollSubscription.unsubscribe();
    }
  }
}
