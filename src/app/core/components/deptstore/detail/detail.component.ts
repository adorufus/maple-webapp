import {Component, OnInit} from '@angular/core';
import {AngularFireAnalytics} from "@angular/fire/compat/analytics";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
  constructor(private analytics: AngularFireAnalytics) {
  }

  ngOnInit() {
    this.analytics.logEvent('screen_view', {
      firebase_screen: "merch_detail",
    })
  }
}
