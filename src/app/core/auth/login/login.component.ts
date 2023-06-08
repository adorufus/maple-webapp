import {Component} from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public authService: AuthService) {
  }

  onSignup() {
    this.authService.GoogleLogin().then(m => {
      console.log("message: ", m)
    }).catch(e => {
      console.log(e)
    })
  }
}
