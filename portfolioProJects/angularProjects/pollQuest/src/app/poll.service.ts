// poll.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  private polls: Poll[] = [
    // Your poll data here...
  ];

  private pollsSubject = new BehaviorSubject<Poll[]>(this.polls);

  getPolls() {
    return this.pollsSubject.asObservable();
  }

  vote(pollId: number, optionId: number) {
    const poll = this.polls.find(p => p.id === pollId);

    if (poll) {
      const option = poll.options.find(o => o.id === optionId);

      if (option) {
        option.votes++;
        this.pollsSubject.next(this.polls);
      }
    }
  }
}
