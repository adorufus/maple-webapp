import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {

  @Input() title: string = ""
  @Input() submitButtonTitle: string = ""
  @Input() leading: string = ""
  @Input() textButtonFunction: any


}
