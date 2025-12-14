import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  styles: [
    `
      input {
        padding: 8px;
        width: 200px;
        margin-right: 8px;
      }

      button {
        padding: 8px 14px;
        background: #2563eb;
        color: #fff;
        border: none;
        cursor: pointer;
      }

      button:hover {
        background: #1d4ed8;
      }

      ul {
        margin-top: 15px;
        padding: 0;
        list-style: none;
      }

      li {
        background: #fff;
        padding: 10px;
        margin-bottom: 6px;
        border-left: 4px solid #2563eb;
      }
    `,
  ],
  template: `
    <h3>Users</h3>

    <input [(ngModel)]="username" placeholder="Enter name" />
    <button (click)="add()">Add</button>

    <ul>
      <li *ngFor="let user of users">{{ user.id }} - {{ user.name }}</li>
    </ul>
  `,
})
export class UsersComponent {
  username = '';
  users = this.userService.getUsers();

  constructor(private userService: UserService) {}

  add() {
    if (this.username.trim()) {
      this.userService.addUser(this.username);
      this.username = '';
    }
  }
}
