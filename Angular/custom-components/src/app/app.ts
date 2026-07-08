import { Component, signal } from '@angular/core';
import { Hello } from './components/hello/hello';
import { Welcome } from './components/welcome/welcome';
import   {Test}  from './components/test/test';
// if a default export of Test is used then---
// import   AliasTest  from './components/test/test';

@Component({
  selector: 'app-root',
  // if a default export of Test is used then---
  // imports: [Hello, Welcome, AliasTest  ],
  imports: [Hello, Welcome, Test  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('custom-components');
}
