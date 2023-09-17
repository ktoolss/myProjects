import { Component, OnInit } from '@angular/core';
import { Poll, mockPolls } from '../poll/poll.types';



@Component({
  selector: 'app-general-poll-list',
  templateUrl: './general-poll-list.component.html',
  styleUrls: ['./general-poll-list.component.css']
})
export class GeneralPollListComponent implements OnInit {
  generalPolls: Poll[] = [];  // Mock data or fetched data goes here.

  constructor() { }

  ngOnInit(): void {
      // If you're fetching data, do it here.
      this.generalPolls = mockPolls ; // fetch or assign your mock data here
  }
}

