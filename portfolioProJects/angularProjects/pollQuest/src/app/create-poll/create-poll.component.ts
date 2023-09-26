import { Component, EventEmitter, Output } from '@angular/core';
import { Poll, PollType } from '../poll/poll.types';
import { generateUniqueId } from '../utils/helpers'; // Update the path as needed
import { PollService } from '../poll.service';
import { AnimationToggleService } from '../animation-toggle.service';




@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent {
  constructor(private pollService: PollService, private animationService: AnimationToggleService) {}
  animate = false;

  @Output() pollCreated: EventEmitter<Poll> = new EventEmitter();

  selectedPollType: PollType = PollType.General;
  pollTypes = Object.keys(PollType).filter(key => isNaN(Number(key)));



  newPoll = {
    question: '',
    options: ['', '', '']
  };

  ngOnInit() {
    this.animationService.animationEnabled$.subscribe(
      (enabled) => (this.animate = enabled)
    );
  }

  updateSelectedPollType(event: any) {
    this.selectedPollType = event.target.value as PollType;
    console.log("Updated selected poll type to:", this.selectedPollType);
  }
  
  addOption() {
    this.newPoll.options.push('');
  }

  createPoll() {
    const existingPollIds = this.pollService.getAllPollIds();
    const newPoll: Poll = {
      id: generateUniqueId(existingPollIds),
      type: this.selectedPollType,
      question: this.newPoll.question,
      options: this.newPoll.options.map(text => ({
        id: generateUniqueId([]),
        text,
        votes: 0
      }))
    };
    
    console.log('newPoll: ', newPoll);
    this.pollService.addPoll(newPoll);
    this.pollCreated.emit(newPoll);

  }
  

  removeOption() {
    // Only remove an option if there's more than one to ensure at least one option remains
    if (this.newPoll.options.length > 1) {
      this.newPoll.options.pop();
    }
  }
  

  trackByFn(index: any, item: any) {
    return index;
  }

  toggleAnimation() {
    this.animationService.toggleAnimation();
  }
}