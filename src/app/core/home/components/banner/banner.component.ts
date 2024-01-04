import { Component, OnInit } from '@angular/core';
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

  constructor(private db: FirestoreService) {

  }

  ngOnInit(): void {

    this.banners = this.db.getCollection('banners')

  }

}
