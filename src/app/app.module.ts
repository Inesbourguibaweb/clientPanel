import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCheckboxModule } from '@angular/material/checkbox';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { environment } from '../environments/environment'; // Import environment configuration
import { LoginService } from './services/login.service';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostsComponent,
    UsersComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    AngularFireModule.initializeApp(environment.firebase), // Initialize AngularFireModule with environment config
    AngularFireDatabaseModule, // Add AngularFireDatabaseModule
    AngularFirestoreModule, // Add AngularFirestoreModule
    AngularFireStorageModule, // Add AngularFireStorageModule
  ],
  providers: [provideAnimationsAsync(), LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
