// poll.component.ts
import { Component, Input } from '@angular/core';
import { Poll, PollOption } from './poll.types'; // Import shared types

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent {
  @Input() poll!: Poll; // Input property to receive poll data

  vote(option: PollOption) {
    option.votes++;
  }
}
