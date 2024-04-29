import { LoginService } from './../../services/login.service';
import {
  Component,
  EventEmitter,
  Injectable,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
// @Injectable()
export class LoginComponent implements OnInit {
  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();
  constructor(private loginService: LoginService) {}

  ngOnInit() {}
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    console.log('form', this.form.value);
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      this.loginService.signInWithEmail(
        this.form.value.email,
        this.form.value.password
      );
    }
  }
}
