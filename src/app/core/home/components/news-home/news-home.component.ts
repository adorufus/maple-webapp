import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {FirestoreService} from "../../../../services/firestore.service";

@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.scss']
})
export class NewsHomeComponent implements OnInit {

  public articles?: Observable<any[]>
  public indexZeroArticle?: any

  constructor(private firestoreService: FirestoreService) {

  }

  ngOnInit() {
    let temp = this.firestoreService.getCollection("articles", (ref) => ref.orderBy("created_time", "desc").limit(6))

    if(temp instanceof Observable<any>) {
      this.articles = temp

      this.articles.subscribe(test => {
        console.log("test: ", test)
        this.indexZeroArticle = test[0]
      })
    }
  }
}
