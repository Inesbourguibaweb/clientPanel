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
  showUserForm = false;
  loaded: boolean = false;

  constructor(private usersService: UsersService) {}
  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
      this.loaded = true;
    });
  }
}
