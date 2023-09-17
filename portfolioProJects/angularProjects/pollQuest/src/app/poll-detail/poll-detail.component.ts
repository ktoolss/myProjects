// poll-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Poll, Option } from '../poll/poll.types';
import { mockPolls, mockIndustryPolls } from '../poll/poll.types';
import { VoteService } from '../vote.service';


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



  constructor(private route: ActivatedRoute, private voteService: VoteService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.pollId = +idParam;
  
        this.poll = this.voteService.getVoteData(this.pollId)
  
        const storedData = localStorage.getItem(`poll_${this.pollId}`);
        if (storedData) {
          this.poll = JSON.parse(storedData);
        } else {
          // Merge both mock arrays and find the desired poll
          this.poll = [...mockPolls, ...mockIndustryPolls].find(poll => poll.id === this.pollId);
        }
      }
    });
    
  }
  
  vote(option: Option) {
    this.selectedOption = option;
  }

  submitVote() {
    if (this.selectedOption && this.poll) {
      this.selectedOption.votes++;
      this.voteService.setVoteData(this.pollId, this.poll);
    }
  }
}
