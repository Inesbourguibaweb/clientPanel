import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  firstName: string = 'INES';
  lastName: string = 'BOURGUIBA';
  constructor() {
    console.log('second');
  }
  ngOnInit(): void {
    console.log('first');
  }
}
