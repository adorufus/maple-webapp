import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-read-articles',
  templateUrl: './read-articles.component.html',
  styleUrls: ['./read-articles.component.scss']
})
export class ReadArticlesComponent implements OnInit {
  public articles?: Observable<any[]>
  public indexZeroArticle?: any
  articleId: string = ""

  constructor(private firestoreService: FirestoreService, private router: Router, private activeRouter: ActivatedRoute) {}



  readClick() {
    this.router.navigate(['/read-articles'])
  }

  ngOnInit() {

    this.activeRouter.queryParams.subscribe(paths => {
      this.articleId = paths["id"]
    })

    let temp = this.firestoreService.getCollection("articles", (ref) => ref.orderBy("created_time", "desc").limit(9))

    if(temp instanceof Observable<any>) {
      this.articles = temp

      this.articles.subscribe(test => {
        console.log("test: ", test)
        this.indexZeroArticle = test[0]
      })
    }
  }
}
