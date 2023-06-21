import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {FirestoreService} from "../../../../services/firestore.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.scss']
})
export class NewsHomeComponent implements OnInit {

  public articles?: Observable<any[]>
  public indexZeroArticle?: any
  articleId: string = ""

  constructor(private firestoreService: FirestoreService, private router: Router) {}

  readClick() {
    this.router.navigate(['/read-articles'], {
      queryParams: {
        id: this.articleId
      }
    })
  }

  ngOnInit() {
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
