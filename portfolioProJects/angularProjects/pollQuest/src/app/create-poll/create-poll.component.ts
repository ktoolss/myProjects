import { Component, EventEmitter, Output } from '@angular/core';
import { Poll, PollType } from '../poll/poll.types';
import { generateUniqueId } from '../utils/helpers'; // Update the path as needed
import { PollsService } from '../polls.service';



@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent {
  constructor(private pollsService: PollsService) {}

  @Output() pollCreated: EventEmitter<Poll> = new EventEmitter();

  selectedPollType: PollType = PollType.General;
  pollTypes = Object.values(PollType);  // this gives an array of all PollType values


  newPoll = {
    question: '',
    options: ['']
  };

  addOption() {
    this.newPoll.options.push('');
  }

  createPoll() {
    const newPoll: Poll = {
      id: generateUniqueId([]), // Or some other mechanism
      type: this.selectedPollType,
      question: this.newPoll.question,
      options: this.newPoll.options.map(text => ({ id: generateUniqueId([]), text, votes: 0 }))
    };
    
    this.pollsService.addPoll(newPoll);
    this.pollCreated.emit(newPoll);
  }

  trackByFn(index: any, item: any) {
    return index;
  }

}