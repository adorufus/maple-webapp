import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-popular-video',
  templateUrl: './popular-video.component.html',
  styleUrls: ['./popular-video.component.scss']
})
export class PopularVideoComponent implements OnInit{

  popularVideoData: Observable<any> = new Observable<any>()

  constructor(private firestoreService: FirestoreService, private router: Router) {

  }

  getVideoData(): Observable<any> {
    return this.firestoreService.getCollection('media', (query) => query.limit(6).orderBy('popularity', 'desc'))
  }

  ngOnInit(): void {
      this.popularVideoData = this.getVideoData()

      this.popularVideoData.subscribe((data) => {
        console.log(data);
      }, error => console.log(error))
  }

  onShowMore() {
    this.router.navigate(['/segment'], {
      queryParams: {
        type: 'Rewind'
      }
    })
  }


}
