// poll-detail.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Poll, Option } from '../poll/poll.types';
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
      } from '../poll/poll.types';
import { VoteService } from '../vote.service';
import { PollService } from '../poll.service';



@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.css']
})
export class PollDetailComponent implements OnInit {
  pollId!: number;
  poll: Poll | undefined;
  selectedPollId: number | null = null;
  selectedOption: Option | null = null;


  constructor(private route: ActivatedRoute, private voteService: VoteService, private pollService: PollService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.pollId = +idParam;
        
        // First, check in PollService
        this.poll = this.pollService.getPollById(this.pollId);
        
        // If not found in PollService, check in local storage
        if (!this.poll) {
          const storedData = localStorage.getItem(`poll_${this.pollId}`);
          if (storedData) {
            this.poll = JSON.parse(storedData);
          }
        }
  
        // If still not found, then fetch from mock data
        if (!this.poll) {
          this.poll = [
            ...mockPolls,
            ...mockIndustryPolls,
            ...mockNationalPolls,
            ...mockStatePolls,
            ...mockLocalPolls,
            ...mockPoliticsPolls,
            ...mockMusicPolls,
            ...mockTelevisionPolls,
            ...mockMarketingPolls,
          ].find(poll => poll.id === this.pollId);
        }
      }
    });
  }
  
  
  vote(option: Option) {
    this.selectedOption = option;
  }

  submitVote() {
    console.log('this.selectedOption: ', this.selectedOption)
    console.log('this.poll: ', this.poll)
    if (this.selectedOption && this.poll) {
      this.selectedOption.votes++;
      this.voteService.setVoteData(this.pollId, this.poll);
    }
  }
}
