import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll, mockTelevisionPolls } from '../poll/poll.types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-television-poll-list',
  templateUrl: './television-poll-list.component.html',
  styleUrls: ['./television-poll-list.component.css']
})
export class TelevisionPollListComponent implements OnInit {
  televisionPolls: Poll[] = [];
  basePolls: Poll[] = mockTelevisionPolls;  // Keep a reference to your mock polls.
  private pollSubscription!: Subscription;

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
    this.basePolls = mockTelevisionPolls;  // Your initial polls

    this.pollSubscription = this.pollService.getPolls().subscribe(servicePolls => {
        console.log("Received updated polls:", servicePolls);
        const allPolls = [...this.basePolls, ...servicePolls.filter(poll => poll.type === 'Television')];
        this.televisionPolls = allPolls;  // Filtering based on type
    });
  }

  ngOnDestroy(): void {
    // Always unsubscribe from observables to avoid memory leaks.
    if (this.pollSubscription) {
      this.pollSubscription.unsubscribe();
    }
  }
}
