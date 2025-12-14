import { Component } from '@angular/core';

@Component({
  standalone: true,
  styles: [
    `
      h3 {
        color: #2563eb;
      }
      p {
        font-size: 15px;
        line-height: 1.6;
      }
    `,
  ],
  template: `
    <h3>Home</h3>
    <p>
      This application demonstrates routing, services, forms, and styling using
      Angular 17.
    </p>
  `,
})
export class HomeComponent {}
