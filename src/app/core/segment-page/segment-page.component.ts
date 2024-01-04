import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-segment-page',
  templateUrl: './segment-page.component.html',
  styleUrls: ['./segment-page.component.scss']
})
export class SegmentPageComponent {
  segmentType: string = ''
  videos?: Observable<any[]>
  indexOneData: any
  title?: string
  tagline?: string
  limit: number = 4
  dataLength = 0;
  showMoreContentLoading: boolean = true;

  bannerUrl?: string

  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  getVideos(): void {
    this.showMoreContentLoading = true
    let temp = this.firestoreService.getCollection('media', (ref) =>
      ref.where('type', '==', this.segmentType == 'bbn' ? "Breaking Bad News" : this.segmentType == "trickroom" ? "Trick Room" : this.segmentType)
        .orderBy('upload_date', 'desc')
        .limit(this.limit),
    )

    if (temp instanceof Observable<any>) {
      this.videos = temp

      this.videos.subscribe(data => {
        console.log(data)
        this.indexOneData = data[0]
        this.dataLength = data.length
        this.showMoreContentLoading = false
      })
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((paths) => {
      console.log(paths['type'])
      this.segmentType =
        paths['type']
      this.bannerUrl = `assets/images/banners/${this.segmentType.toUpperCase()}.jpg`
    })

    this.getVideos()
  }

  showMoreButton(): boolean {
    if (this.limit > this.dataLength) {
      return false
    } else {
      return true
    }
  }

  onShowMoreClick() {
    this.limit += 4;
    this.getVideos()
  }
}
