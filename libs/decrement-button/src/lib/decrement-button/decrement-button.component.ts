import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CounterDataService} from '@poc-nx-module-federation-with-yarn/counter-data';

@Component({
  selector: 'lib-decrement-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './decrement-button.component.html',
  styleUrl: './decrement-button.component.css',
})
export class DecrementButtonComponent {
  constructor (private counterDataService : CounterDataService){}

  decrement() {
    this.counterDataService.decrement();
  }
}
