import { Component, OnInit, OnDestroy } from '@angular/core';
import { AnimationToggleService } from '../animation-toggle.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
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
