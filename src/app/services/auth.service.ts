import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {AngularFireAuth} from 'angularfire2/auth';
import {auth} from 'firebase/app';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/mergeMap';
import {User} from '../models/user';
import {AngularFirestore} from 'angularfire2/firestore';
import {UserService} from './user.service';
import AuthProvider = auth.AuthProvider;
import GithubAuthProvider = auth.GithubAuthProvider;
import TwitterAuthProvider = auth.TwitterAuthProvider;
import FacebookAuthProvider = auth.FacebookAuthProvider;
import GoogleAuthProvider = auth.GoogleAuthProvider;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get user(): Observable<User> {
    return this.afAuth.user
      .filter(user => !!user)
      .flatMap(user => this.afs.doc<User>(`users/${user.uid}`).snapshotChanges())
      .map(a => {
        const item = a.payload.data();
        item.uid = a.payload.id;
        return item;
      });
  }

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router,
              private userService: UserService) {
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
      return this.userService.save({
        uid: credentials.user.uid,
        email: credentials.user.email,
        roles: ['owner']
      });
    });
  }

  signInWithEmail(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  isLoggedIn(): Observable<boolean> {
    return this.afAuth.user.map(user => !!user);
  }

  logout(): void {
    this.afAuth.auth.signOut()
      .then(() => this.router.navigate(['login']));
  }
}
