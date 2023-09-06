import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Poll } from '../poll/poll.types';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})
export class PollListComponent {
  @Input() polls: Poll[] = [];

  constructor(private router: Router) {}

  navigateToPoll(pollId: number) {
    this.router.navigate(['poll', pollId]);
  }
}
