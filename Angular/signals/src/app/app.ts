import { Component, signal } from '@angular/core';
import { Counter } from './components/counter/counter';
import { Clock } from './components/clock/clock';

@Component({
  selector: 'app-root',
  imports: [Counter,Clock],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('signals');
}
