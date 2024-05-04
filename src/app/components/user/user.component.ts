import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    isActive: new FormControl(),
    registered: new FormControl(),
    hide: new FormControl(),
  });
  constructor() {}

  ngOnInit(): void {}

  submitUser() {
    console.log('userForm', this.userForm.value);
  }
}
