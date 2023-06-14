import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent {

  constructor(private router: Router) {}
  readClick() {
    this.router.navigate(['/read-articles'])
  }
}
