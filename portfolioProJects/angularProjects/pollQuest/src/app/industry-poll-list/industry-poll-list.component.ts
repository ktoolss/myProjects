import { Component, OnInit } from '@angular/core';
import { Poll, mockIndustryPolls } from '../poll/poll.types';

@Component({
  selector: 'app-industry-poll-list',
  templateUrl: './industry-poll-list.component.html',
  styleUrls: ['./industry-poll-list.component.css']
})

export class IndustryPollListComponent implements OnInit {
    industryPolls: Poll[] = [];  // Mock data or fetched data goes here.

    constructor() { }

    ngOnInit(): void {
    // If you're fetching data, do it here.
    this.industryPolls = mockIndustryPolls ; // fetch or assign your mock data here
    }
}