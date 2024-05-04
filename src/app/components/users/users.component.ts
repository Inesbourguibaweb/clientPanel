import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  clicked = false;
  constructor(private usersService: UsersService) {}
  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }

  getUsersInfo() {
    console.log('this.usersService.getUsers()', this.usersService.getUsers());
    this.users = this.usersService.getUsers();
    this.clicked = true;
  }
}
