import { Component } from '@angular/core';
import { mockPolls, mockIndustryPolls } from '../poll/poll.types'; // Update the path as needed

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent {
  polls = mockPolls;
  industryPolls = mockIndustryPolls; // Define industryPolls here

  constructor() { }
}
