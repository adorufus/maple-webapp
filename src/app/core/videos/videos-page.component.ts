import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {FirestoreService} from "../../services/firestore.service";

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.scss']
})
export class VideosPageComponent {
  public segments?: Observable<any[]>

  constructor(private firestoreService: FirestoreService) {

  }

  ngOnInit() {
    let temp = this.firestoreService.getCollection("media-type")

    if(temp instanceof Observable<any>) {
      this.segments = temp

      this.segments.subscribe(test => {
        console.log("test: ", test)
      })
    }
  }
}
