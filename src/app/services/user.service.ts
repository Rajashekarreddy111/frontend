import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Raja' },
    { id: 2, name: 'hai' },
  ];

  getUsers() {
    return this.users;
  }

  addUser(name: string) {
    this.users.push({
      id: this.users.length + 1,
      name,
    });
  }
}
