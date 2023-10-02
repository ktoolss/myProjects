// poll.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { 
  mockPolls, 
  mockIndustryPolls, 
  mockNationalPolls, 
  mockStatePolls, 
  mockLocalPolls, 
  mockPoliticsPolls, 
  mockMusicPolls, 
  mockTelevisionPolls, 
  mockMarketingPolls,
  Poll,
  PollType
} from './poll/poll.types';



@Injectable({
  providedIn: 'root'
})
export class PollService {
  private polls: Poll[] = [
    // Your poll data here...
  ];

  private pollsSubject = new BehaviorSubject<Poll[]>(this.polls);

  constructor() {
    this.fetchInitialPolls();
    const localStoragePolls = localStorage.getItem('polls');
    if (localStoragePolls) {
      this.polls = JSON.parse(localStoragePolls);
      this.pollsSubject.next(this.polls);
    }
  }

  getAllPolls(): Poll[] {
    return [
      ...mockPolls,
      ...mockIndustryPolls,
      ...mockNationalPolls,
      ...mockStatePolls,
      ...mockLocalPolls,
      ...mockPoliticsPolls,
      ...mockMusicPolls,
      ...mockTelevisionPolls,
      ...mockMarketingPolls
    ];
  }
  
  getPollsByType(pollType: PollType): Poll[] {
    switch (pollType) {
      case PollType.General:
        return mockPolls;
      case PollType.Industry:
        return mockIndustryPolls;
      case PollType.National:
        return mockNationalPolls;
      case PollType.State:
        return mockStatePolls;
      case PollType.Local:
        return mockLocalPolls;
      case PollType.Politics:
        return mockPoliticsPolls;
      case PollType.Music:
        return mockMusicPolls;
      case PollType.Television:
        return mockTelevisionPolls;
      case PollType.Marketing:
        return mockMarketingPolls;
      default:
        throw new Error('Invalid poll type');
    }
  }


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

  // getPollsByType(type: PollType): Poll[] {
  //   return this.polls.filter(poll => poll.type === type);
  // }

  fetchInitialPolls() {
    if (!localStorage.getItem('polls')) {
      localStorage.setItem('polls', JSON.stringify(this.polls));
    }
    this.pollsSubject.next(this.polls);
  }


  addPoll(poll: Poll) {
    this.polls.push(poll);
    localStorage.setItem('polls', JSON.stringify(this.polls));
    // Optionally, emit an event if you want other components to react to the change.
    console.log('addPoll this.polls: ', this.polls)
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
