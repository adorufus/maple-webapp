import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';
import {AngularFireAnalytics} from "@angular/fire/compat/analytics";

@Component({
  selector: 'app-detailproduk1',
  templateUrl: './detailproduk1.component.html',
  styleUrls: ['./detailproduk1.component.scss'],
})
export class Detailproduk1Component implements OnInit {
  public product?: Observable<any>;
  productId: string = '';
  tokopedia_url: string = '';
  product_detail: any

  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private analytics: AngularFireAnalytics
  ) {}

  ngOnInit() {
    this.activeRouter.queryParams.subscribe((paths) => {
      this.productId = paths['id'];
    });

    let temp = this.firestoreService.getDoc(`merch/${this.productId}`);

    console.log(temp);
    this.product = temp;

    this.product?.subscribe((v) => {
      this.tokopedia_url = v.tokopedia_url;
      this.product_detail = v
      console.log(v);
    });
  }

  onClick() {

    this.analytics.logEvent("product_buy_click", {
      title: this.product_detail.title,
      price: this.product_detail.price,
      tokopedia_url: this.product_detail.tokopedia_url,
      description: this.product_detail.description
    })
    window.open(this.tokopedia_url);
  }
}
