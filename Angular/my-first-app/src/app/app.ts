import { Component, signal } from '@angular/core';

@Component({  //@ is called a decorator which is a function that adds metadata to a class
  selector: 'app-root',  //selector is used to identify the element
  imports: [],  //imports: it is an array of components that are used in the template
  templateUrl: './app.html',  //templateUrl: it is the path to the template
  styleUrl: './app.css'   //styleUrl: it is the path to the style
})
export class App {
  protected readonly title = signal('my-first-app');  //protected: it is a keyword that is used to protect the property
                                                    //readonly: it is a keyword that is used to make the property read-only
}
