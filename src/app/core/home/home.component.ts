import {Component, OnInit} from '@angular/core';
import {AngularFireAnalytics} from "@angular/fire/compat/analytics";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private analytics: AngularFireAnalytics) {
  }

  ngOnInit() {
    this.analytics.logEvent('screen_view', {
      firebase_screen: "Home",
    })
  }


}
