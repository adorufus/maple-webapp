import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-detailproduk1',
  templateUrl: './detailproduk1.component.html',
  styleUrls: ['./detailproduk1.component.scss'],
})
export class Detailproduk1Component implements OnInit {
  public product?: Observable<any>;
  productId: string = '';
  tokopedia_url: string = '';

  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    private activeRouter: ActivatedRoute
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
      console.log(v);
    });
  }

  onClick() {
    window.open(this.tokopedia_url);
  }
}
