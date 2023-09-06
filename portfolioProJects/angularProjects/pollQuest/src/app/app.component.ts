import { Component } from '@angular/core';
import { mockPolls, mockIndustryPolls } from './poll/poll.types'; // Update path as needed

interface PollOption {
  id: number;
  text: string;
  votes: number;
}

interface Poll {
  id: number;
  question: string;
  options: PollOption[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  polls: Poll[] = mockPolls;
  industryPolls: Poll[] = mockIndustryPolls;


  clearLocalStorage() {
    localStorage.clear();
    // Optionally, you can reload the page to reflect the changes immediately
    location.reload();
  }
  
}
