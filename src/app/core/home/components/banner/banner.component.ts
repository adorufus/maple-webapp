import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  banners: Observable<any> = new Observable<any>()
  bannersItems: any[] = [
    {
      imageUrl: "assets/images/banners/B1.jpg"
    }, {
      imageUrl: "assets/images/banners/REWIND.jpg"
    }, {
      imageUrl: "assets/images/banners/TRICKROOM.jpg"
    }, {
      imageUrl: "assets/images/banners/WANDER.jpg"
    }, {
      imageUrl: "assets/images/banners/CAN!.jpg"
    },{
      imageUrl: "assets/images/banners/BBN.jpg"
    },{
      imageUrl: "assets/images/banners/DIXI.jpg"
    },
    {
      imageUrl: "assets/images/banners/TEMPATHUMBLE.jpg"
    },
  ]

  constructor(private db: FirestoreService, private router: Router) {

  }

  ngOnInit(): void {

    this.banners = this.db.getCollection('banners')

  }

  onCollabClick() {
    this.router.navigate(['/collaboration'])
  }

  onSeeLatest(bannerIndex: number) {
    let segmentType = 'Rewind'

    if(bannerIndex == 1) {
      segmentType = 'Rewind'
    }

    if(bannerIndex == 2) {
      segmentType = 'trickroom'
    }

    if(bannerIndex == 3) {
      segmentType = 'Wander'
    }

    if(bannerIndex == 4) {
      segmentType = 'CAN!'
    }

    if(bannerIndex == 5) {
      segmentType = 'bbn'
    }
    
    if(bannerIndex == 6) {
      segmentType = 'Dixi'
    }

    if(bannerIndex == 7) {
      segmentType = 'tempathumble'
    }

    this.router.navigate(['/segment'], {
      queryParams: {
        type: segmentType
      }
    })
  }

}
