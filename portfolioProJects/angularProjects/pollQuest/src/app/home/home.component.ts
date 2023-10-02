import { Component, OnInit, HostListener } from '@angular/core';
import { PollService } from '../poll.service';
import { ActivatedRoute } from '@angular/router';
import { 
          Poll,
          PollType,
          Option,
          mockPolls, 
          mockIndustryPolls,
          mockNationalPolls,
          mockStatePolls,
          mockLocalPolls,
          mockPoliticsPolls,
          mockMusicPolls,
          mockTelevisionPolls,
          mockMarketingPolls
        } from '../poll/poll.types';
import { animate, style, transition, trigger } from '@angular/animations';
import { VoteService } from '../vote.service';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('500ms', style({ opacity: '1' })),
      ]),
    ]),
  ],
})

export class HomeComponent implements OnInit {
  polls: Poll[] = [];
  poll: Poll | null = null;
  start = 0;
  count = 8;
  page = 0;
  pollId!: number;
  selectedOption: Option | null = null;


  constructor(private route: ActivatedRoute, private pollService: PollService, private voteService: VoteService,) {} // Injecting the service

  ngOnInit() {
    // Attempt to fetch all polls.
    this.polls = this.pollService.getAllPolls();
    if (this.polls.length === 0) {
      // Fetch from local storage or mock data as a fallback.
      this.polls = this.fetchFromLocalStorageOrMockData();
    }

    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.pollId = +idParam;
        
        // First, check in PollService
        this.poll = this.pollService.getPollById(this.pollId) || null;
        
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
          ].find(poll => poll.id === this.pollId) || null;
        }
      }
    });
  }

  fetchFromLocalStorageOrMockData(): Poll[] {
    const localStoragePolls = localStorage.getItem('polls');
    return localStoragePolls ? JSON.parse(localStoragePolls) : []; // return mock data if local storage is empty
  }

  loadMorePolls() {
    this.page++;
    this.pollService.getPolls().subscribe((newPolls: Poll[]) => {
      this.polls = [...this.polls, ...newPolls];
    });
  }

  vote(option: Option) {
    this.selectedOption = option;
  }

  submitVote(poll: Poll) {
    console.log('this.selectedOption: ', this.selectedOption)
    console.log('poll: ', poll)
    if (this.selectedOption && poll) {
      const selectedOption = poll.options.find(
        option => option === this.selectedOption
      );
      if (selectedOption) {
        selectedOption.votes++;
        this.voteService.setVoteData(poll.id, poll);
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.loadMorePolls();
    }
  }
}
