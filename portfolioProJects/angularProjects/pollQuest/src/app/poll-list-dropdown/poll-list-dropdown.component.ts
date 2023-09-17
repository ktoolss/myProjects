import { Component, Input } from '@angular/core';
import { Poll } from '../poll/poll.types';

@Component({
  selector: 'app-poll-list-dropdown',
  templateUrl: './poll-list-dropdown.component.html',
  styleUrls: ['./poll-list-dropdown.component.css']
})
export class PollListDropdownComponent {
  @Input() polls: Poll[] = [];
  @Input() industryPolls: Poll[] = [];
  @Input() pollSetName: string = '';

  showDropdown: boolean = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
