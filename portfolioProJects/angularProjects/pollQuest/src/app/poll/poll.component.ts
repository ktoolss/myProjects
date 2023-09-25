import { Poll, Option } from './poll.types'; 
import { Component, Input, ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent {
  constructor(private cd: ChangeDetectorRef) {}
  @Input() poll!: Poll;
  hasVoted = false; 

  vote(option: Option) {
    console.log("Vote method called. Has Voted?", this.hasVoted);
    if (!this.hasVoted) {   // <-- Check this before voting
      option.votes++;
      this.hasVoted = true; // <-- Set this after voting
      this.cd.markForCheck();
    }
  }
}
