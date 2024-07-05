import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CounterDataService} from '@poc-nx-module-federation-with-yarn/counter-data';

@Component({
  selector: 'lib-reset-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reset-button.component.html',
  styleUrl: './reset-button.component.css',
})
export class ResetButtonComponent {
  constructor (private counterDataService : CounterDataService){}

  reset() {
    this.counterDataService.reset();
  }
}
