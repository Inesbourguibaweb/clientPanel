import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './../models/user.model';
import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  @Input() showUserForm = false;

  userForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(
        "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
      ),
    ]),
    isActive: new FormControl(true),
    registered: new FormControl(new Date()),
    hide: new FormControl(false),
  });
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('userForm', this.userForm.value);
    this.usersService.addUser(this.userForm.value);
  }
}
