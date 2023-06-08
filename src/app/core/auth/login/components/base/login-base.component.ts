import { Component, Input } from '@angular/core';
import {AuthService} from "../../../../../services/auth.service";

@Component({
  selector: 'app-login-base',
  templateUrl: './login-base.component.html',
  styleUrls: ['./login-base.component.scss']
})
export class LoginBaseComponent {

  @Input() title: string = ""
  @Input() submitButtonTitle: string = ""
  @Input() leading: string = ""

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
