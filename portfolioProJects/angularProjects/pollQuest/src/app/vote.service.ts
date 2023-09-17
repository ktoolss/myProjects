// vote.service.ts
import { Injectable } from '@angular/core';
import { Poll } from './poll/poll.types'; // Update the path as needed
import { mockPolls, mockIndustryPolls } from './poll/poll.types';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  private voteData: Record<number, Poll> = {};

  constructor() {}

  getVoteData(pollId: number): Poll | undefined {
    // Assuming your service retrieves data from the backend
    // Placeholder logic for now:
    return mockPolls.find((poll: Poll) => poll.id === pollId) || mockIndustryPolls.find((poll: Poll) => poll.id === pollId);
  }

  setVoteData(pollId: number, poll: Poll) {
    this.voteData[pollId] = poll;
  }
}