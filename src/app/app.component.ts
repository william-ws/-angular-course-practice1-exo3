import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valeur: number;

  constructor() {
    this.valeur = 0;
  }

  increment() {
    this.valeur +=2;
  }
  decrement() {
    this.valeur -=2;
  }
}
