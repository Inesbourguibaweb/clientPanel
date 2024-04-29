import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, AuthError } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private authService: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  signInWithEmail(email: string, password: string): Promise<void> {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.router.navigate(['/']);
        // Do something with the user...
      })
      .catch((error: AuthError) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle the error...
      });
  }
}
