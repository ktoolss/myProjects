import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll, mockMusicPolls } from '../poll/poll.types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-music-poll-list',
  templateUrl: './music-poll-list.component.html',
  styleUrls: ['./music-poll-list.component.css']
})
export class MusicPollListComponent implements OnInit {
  musicPolls: Poll[] = [];
  basePolls: Poll[] = mockMusicPolls;  // Keep a reference to your mock polls.
  private pollSubscription!: Subscription;

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
    this.basePolls = mockMusicPolls;  // Your initial polls

    this.pollSubscription = this.pollService.getPolls().subscribe(servicePolls => {
        console.log("Received updated polls:", servicePolls);
        const allPolls = [...this.basePolls, ...servicePolls.filter(poll => poll.type === 'Music')];
        this.musicPolls = allPolls;  // Filtering based on type
    });
  }

  ngOnDestroy(): void {
    // Always unsubscribe from observables to avoid memory leaks.
    if (this.pollSubscription) {
      this.pollSubscription.unsubscribe();
    }
  }
}
