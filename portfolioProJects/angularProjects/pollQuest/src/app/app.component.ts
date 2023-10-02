import { Component } from '@angular/core';
import { mockPolls, mockIndustryPolls } from './poll/poll.types';
import { AnimationToggleService } from './animation-toggle.service';
import { Router } from '@angular/router';

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
  animationEnabled$ = this.animationService.animationEnabled$;

  constructor(private animationService: AnimationToggleService, private router: Router) {}


  navigate(path: string) {
    this.router.navigate([path]);
  }

  toggleAnimation() {
    this.animationService.toggleAnimation();
  }

  clearLocalStorage() {
    localStorage.clear();
    // Optionally, you can reload the page to reflect the changes immediately
    location.reload();
  }
  
}
