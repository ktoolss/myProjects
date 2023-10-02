import { Component, OnInit, OnDestroy } from '@angular/core';
import { AnimationToggleService } from '../animation-toggle.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  animate = false;
  private subscription!: Subscription;

  constructor(private animationService: AnimationToggleService) {}

  ngOnInit() {
    this.subscription = this.animationService.animationEnabled$.subscribe(
      (enabled) => (this.animate = enabled)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
