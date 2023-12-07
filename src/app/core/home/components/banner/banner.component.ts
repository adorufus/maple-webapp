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

  constructor(private db: FirestoreService) {

  }

  ngOnInit(): void {

    this.banners = this.db.getCollection('banners')
      
  }

}
