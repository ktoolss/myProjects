import { Component, EventEmitter, Output } from '@angular/core';
import { Poll, PollType } from '../poll/poll.types';
import { generateUniqueId } from '../utils/helpers'; // Update the path as needed
import { PollService } from '../poll.service';



@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent {
  constructor(private pollService: PollService) {}

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
    console.log('working here');
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
    
    this.pollService.addPoll(newPoll);
    this.pollCreated.emit(newPoll);
    console.log('All Poll IDs CP: ', this.pollService.getAllPollIds());

  }
  



  trackByFn(index: any, item: any) {
    return index;
  }

}