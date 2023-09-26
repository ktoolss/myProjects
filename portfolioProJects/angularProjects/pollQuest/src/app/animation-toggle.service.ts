import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimationToggleService {
  private animationEnabled = new BehaviorSubject<boolean>(true); // set initial value to true
  animationEnabled$ = this.animationEnabled.asObservable();

  toggleAnimation() {
    this.animationEnabled.next(!this.animationEnabled.value);
  }
}
