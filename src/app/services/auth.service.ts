import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {AngularFireAuth} from 'angularfire2/auth';
import {auth} from 'firebase/app';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {AngularFirestore} from 'angularfire2/firestore';
import AuthProvider = auth.AuthProvider;
import GithubAuthProvider = auth.GithubAuthProvider;
import TwitterAuthProvider = auth.TwitterAuthProvider;
import FacebookAuthProvider = auth.FacebookAuthProvider;
import GoogleAuthProvider = auth.GoogleAuthProvider;
import {filter, flatMap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get user(): Observable<User> {
    return this.afAuth.user.pipe(
      filter(user => !!user),
      flatMap(user => this.afs.doc<User>(`users/${user.uid}`).snapshotChanges()),
      map(a => {
        const item = a.payload.data();
        item.uid = a.payload.id;
        return item;
      }));
  }

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
  }

  signInWithTwitter() {
    return this.oAuthLogin(
      new TwitterAuthProvider()
    );
  }

  signInWithFacebook() {
    return this.oAuthLogin(
      new FacebookAuthProvider()
    );
  }

  signInWithGoogle() {
    return this.oAuthLogin(new GoogleAuthProvider());
  }

  signInWithGithub() {
    return this.oAuthLogin(
      new GithubAuthProvider()
    );
  }

  private oAuthLogin(provider: AuthProvider) {
    return this.afAuth.auth.signInWithPopup(provider).then(credentials => {
      return this.afs.doc('/users/' + credentials.user.uid).set({
        email: credentials.user.email,
        roles: ['owner']
      });
    });
  }

  signInWithEmail(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  isLoggedIn(): Observable<boolean> {
    return this.afAuth.user.pipe(map(user => !!user));
  }

  logout(): void {
    this.afAuth.auth.signOut()
      .then(() => this.router.navigate(['login']));
  }
}
