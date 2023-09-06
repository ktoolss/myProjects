// vote.service.ts
import { Injectable } from '@angular/core';
import { Poll } from './poll/poll.types'; // Update the path as needed

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  private voteData: Record<number, Poll> = {};

  constructor() {}

  getVoteData(pollId: number): Poll | null {
    return this.voteData[pollId] || null;
  }

  setVoteData(pollId: number, poll: Poll) {
    this.voteData[pollId] = poll;
  }
}
