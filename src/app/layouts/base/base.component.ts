import { Component } from '@angular/core';
import {RouteConfigLoadEnd, RouteConfigLoadStart, Router} from "@angular/router";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {
  isLoading: boolean = false;

  constructor(private router: Router) {
    router.events.forEach((event: any) => {
      if (event instanceof RouteConfigLoadStart) {
        this.isLoading = true
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isLoading = false
      }
    })
  }
}
