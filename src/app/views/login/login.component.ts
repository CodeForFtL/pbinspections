import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  errorMessage: String;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async loginWithTwitter() {
    try {
      await this.authService.signInWithTwitter();
      this.router.navigate(['']);
    } catch (err) {
      this.errorMessage = err.message;
    }
  }

  async loginWithGoogle() {
    try {
      await this.authService.signInWithGoogle();
      this.router.navigate(['']);
    } catch (err) {
      this.errorMessage = err.message;
    }
  }

  async loginWithGithub() {
    try {
      await this.authService.signInWithGithub();
      this.router.navigate(['']);
    } catch (err) {
      this.errorMessage = err.message;
    }
  }

  async loginWithFacebook() {
    try {
      await this.authService.signInWithFacebook();
      this.router.navigate(['']);
    } catch (err) {
      this.errorMessage = err.message;
    }
  }

  async loginWithEmail() {
    try {
      await this.authService.signInWithEmail(this.user.email, this.user.password);
      this.router.navigate(['']);
    } catch (err) {
      this.errorMessage = err.message;
    }
  }


}
