import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AngularFireAnalytics } from "@angular/fire/compat/analytics";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public articles?: Observable<any[]>
  public indexZeroArticle?: any
  public maxSize: number = 5;
  public directionLinks: boolean = true;

  public limit: number = 6
  dataLength: number = 0

  //page control
  p: number = 1;
  item: number = 9;
  onPageChange(page: number) {
    this.p = page;
    window.scrollTo(0, 0);
  }

  constructor(private firestoreService: FirestoreService, private router: Router, private analytics: AngularFireAnalytics) { }

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

  convertToPlainString(content: string): string {
    return content.replace(/<[^>]*>/g, '')
  }

  ngOnInit() {

    this.analytics.logEvent("screen_view", {
      firebase_screen: "articles"
    })

    let temp = this.firestoreService.getCollection("articles", (ref) => ref.orderBy("created_time", "desc"))

    if (temp instanceof Observable<any>) {
      this.articles = temp

      this.articles.subscribe(test => {
        console.log("test: ", test)
        this.dataLength = test.length
        this.indexZeroArticle = test[0]
      })
    }
  }

  checkForLimit(): Boolean {
    if (this.limit > this.dataLength) {
      return false
    } else {
      return true
    }
  }

  onShowMore() {
    this.limit += 3
  }
}
