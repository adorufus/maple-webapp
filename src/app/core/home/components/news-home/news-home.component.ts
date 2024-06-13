import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {FirestoreService} from "../../../../services/firestore.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.scss'],
})
export class NewsHomeComponent implements OnInit {

  public articles?: Observable<any[]>
  public indexZeroArticle?: any

  constructor(private firestoreService: FirestoreService, private router: Router) {}

  readClick(articleId: string) {
    this.router.navigate(['/read-articles'], {
      queryParams: {
        id: articleId
      }
    })
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});
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

  onShowMore() {
    this.router.navigate(['/articles'])
  }
}
