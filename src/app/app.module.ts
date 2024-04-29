import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './components/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { UserComponent } from './components/user/user.component';
import { environment } from '../environments/environment'; // Import environment configuration
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [AppComponent, LoginComponent, UserComponent],
  imports: [
    BrowserModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase), // Initialize AngularFireModule with environment config
    AngularFireDatabaseModule, // Add AngularFireDatabaseModule
    AngularFirestoreModule, // Add AngularFirestoreModule
    AngularFireStorageModule, // Add AngularFireStorageModule
  ],
  providers: [provideAnimationsAsync(), LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
