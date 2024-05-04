import { Injectable } from '@angular/core';
import { User } from 'firebase/auth';

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

  getUsers() {
    return this.users.slice();
  }
}
