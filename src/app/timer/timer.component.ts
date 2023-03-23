import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {

  isCountingUp = false;
  time = 0;
  timeFormatted = '';
  subscription?: Subscription;

  onClick() {
    if (!this.isCountingUp) {
      this.subscription = interval(1000).subscribe(() => {
        this.time += 1;
        this.timeFormatted = `${Math.floor(this.time / 60)} : ${Math.floor(this.time % 60)}`;
      })
    } else {
      this.time = 0;
      this.subscription?.unsubscribe();
    }
    this.isCountingUp = !this.isCountingUp;

    
  }


}
