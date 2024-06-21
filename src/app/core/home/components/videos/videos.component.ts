import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {FirestoreService} from "../../../../services/firestore.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit{
  public segments?: Observable<any[]>

  constructor(private firestoreService: FirestoreService, private router: Router) {

  }

  ngOnInit() {
    let temp = this.firestoreService.getCollection("media-type", ref=> ref.where("name", "!=", "All"))

    if(temp instanceof Observable<any>) {
      this.segments = temp

      this.segments.subscribe(test => {
        console.log("test: ", test)
      })
    }
  }

  onShowMore() {
    this.router.navigate(['/articles'])
  }
}
