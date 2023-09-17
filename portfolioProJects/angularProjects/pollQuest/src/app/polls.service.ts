import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Poll, PollType, mockPolls, mockIndustryPolls } from './poll/poll.types';


// polls.service.ts

@Injectable({
  providedIn: 'root'
})
export class PollsService {

  private polls: Poll[] = [...mockPolls, ...mockIndustryPolls]; // assuming mockPolls and mockIndustryPolls are imported

  public pollUpdated = new Subject<Poll[]>(); // import { Subject } from 'rxjs';

  getPolls(): Poll[] {
    return [...this.polls];
  }

  getPollsByType(type: PollType): Poll[] {
    return this.polls.filter(poll => poll.type === type);
  }

  getPollUpdatedListener() {
    return this.pollUpdated.asObservable();  // import { Observable } from 'rxjs';
  }

  addPoll(poll: Poll) {
    this.polls.push(poll);
    this.pollUpdated.next([...this.polls]);
  }
}