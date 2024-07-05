import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DecrementButtonComponent} from  '@poc-nx-module-federation-with-yarn/decrement-button'
import {IncrementButtonComponent} from  '@poc-nx-module-federation-with-yarn/increment-button'
import {ResetButtonComponent} from  '@poc-nx-module-federation-with-yarn/reset-button'
import { Observable } from 'rxjs';
import { CounterDataService } from '@poc-nx-module-federation-with-yarn/counter-data';

@Component({
  standalone: true,
  imports: [CommonModule, DecrementButtonComponent, IncrementButtonComponent, ResetButtonComponent],
  selector: 'app-remote-app1-entry',
  template: 
  `<h1> Hello, it's meee --remote app1-- </h1>
  <div>Counter: {{ count$ | async }}</div>
  <lib-decrement-button></lib-decrement-button>
  <lib-increment-button></lib-increment-button>
  <lib-reset-button></lib-reset-button>`,
})
export class RemoteEntryComponent {
  count$: Observable<number>;

  constructor(private counterDataService: CounterDataService) {
    this.count$ = this.counterDataService.currentCount;
  }
}
