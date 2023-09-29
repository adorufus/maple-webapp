import {Component, OnInit} from '@angular/core';
import {AngularFireAnalytics} from "@angular/fire/compat/analytics";

@Component({
  selector: 'app-deptstore',
  templateUrl: './deptstore.component.html',
  styleUrls: ['./deptstore.component.scss']
})
export class DeptstoreComponent implements OnInit{

  constructor(private analytics: AngularFireAnalytics) {
  }

  ngOnInit() {
    this.analytics.logEvent('screen_view', {
      firebase_screen: "Department Store",
    })
  }

}
