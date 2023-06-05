import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-scroller-menu-title',
  templateUrl: './scroller-menu-title.component.html',
  styleUrls: ['./scroller-menu-title.component.scss']
})
export class ScrollerMenuTitleComponent {
  @Input() title: string = ""

}
