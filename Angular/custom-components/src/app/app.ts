import { Component, signal } from '@angular/core';
import { Hello } from './components/hello/hello';
import { Welcome } from './components/welcome/welcome';
import { Test } from './components/test/test';

@Component({
  selector: 'app-root',
  imports: [Hello, Welcome, Test  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('custom-components');
}
