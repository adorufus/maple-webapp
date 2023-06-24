import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.component.html',
  styleUrls: ['./produk.component.scss']
})
export class ProdukComponent implements OnInit {

  public articles?: Observable<any[]>
  public indexZeroProduct?: any

  constructor(private router: Router, private firestoreService:FirestoreService) {}


  ngOnInit() {
    let temp = this.firestoreService.getCollection("merch", (ref) => ref.orderBy("created_time", "desc").limit(9))

    if(temp instanceof Observable<any>) {
      this.articles = temp

      this.articles.subscribe(test => {
        console.log("test: ", test)
        this.indexZeroProduct = test[0]
      })
    }
  }

  onClick(productId: string) {
    this.router.navigate(['/detail'], {
      queryParams: {
        id: productId
      }
    })
    window.scroll(0, 0)
  }
}
