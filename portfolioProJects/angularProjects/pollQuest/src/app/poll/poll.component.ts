import { Component, Input } from '@angular/core';
import { Poll, Option } from './poll.types'; 

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent {
  @Input() poll!: Poll;

  vote(option: Option) {
    option.votes++;
  }
}
