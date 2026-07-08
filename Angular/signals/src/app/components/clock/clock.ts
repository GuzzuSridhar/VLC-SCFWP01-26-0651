import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-clock',
  imports: [],
  templateUrl: './clock.html',
  styleUrl: './clock.css',
})
export class Clock {

  currentTime = signal(new Date());
  greet = signal("")

  constructor(){
    setInterval(() => {
      this.currentTime.set(new Date());
    }, 1000);

    effect(() => {
    const hour = this.currentTime().getHours();
    if (hour < 12) {
       this.greet.set('Good Morning');
    } else if (hour < 18){
      this.greet.set('Good Afternoon');
    }
    else{
      this.greet.set('Good Evening');
    }
    })
  }
}
