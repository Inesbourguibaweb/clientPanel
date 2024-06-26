import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users = [
    {
      firstName: 'Ines',
      lastName: 'Bourguiba',
      email: 'ines@ines.com',
      isActive: true,
      registered: new Date('04/05/2024').toISOString(),
      hide: false,
    },
  ];
  constructor() {}

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    let newUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isActive: true,
      registered: new Date().toISOString(),
      hide: false,
    };
    this.users.unshift(newUser);
  }
}
