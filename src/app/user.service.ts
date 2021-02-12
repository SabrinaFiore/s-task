import { Injectable } from '@angular/core';
import { User } from './user/user.model';

@Injectable()
export class UserService {
  users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }
}
