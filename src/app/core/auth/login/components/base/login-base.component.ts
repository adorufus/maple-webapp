import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-base',
  templateUrl: './login-base.component.html',
  styleUrls: ['./login-base.component.scss']
})
export class LoginBaseComponent {

  @Input() title: string = ""
  @Input() submitButtonTitle: string = ""
  @Input() leading: string = ""
  @Input() textButtonFunction: any


}
