// poll.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Poll, PollType } from './poll/poll.types';


@Injectable({
  providedIn: 'root'
})
export class PollService {
  private polls: Poll[] = [
    // Your poll data here...
  ];

  private pollsSubject = new BehaviorSubject<Poll[]>(this.polls);

  getCurrentPollIds(): number[] {
    return this.polls.map(p => p.id);
  }

  getAllPollIds(): number[] {
    return this.polls.map(poll => poll.id);
  }
  

  getOptionIdsForPoll(pollId: number): number[] {
    const poll = this.polls.find(p => p.id === pollId);
    return poll ? poll.options.map(o => o.id) : [];
  }

  getPollById(id: number): Poll | undefined {
    return this.polls.find(poll => poll.id === id);
  }

  getPolls() {
    console.log("Adding new poll:", this.polls);
    return this.pollsSubject.asObservable();
  }

  getPollsByType(type: PollType): Poll[] {
    return this.polls.filter(poll => poll.type === type);
  }
  

  addPoll(poll: Poll) {
    this.polls.push(poll);
    // Optionally, emit an event if you want other components to react to the change.
    this.pollsSubject.next([...this.polls]);
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
