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
  public article?: Observable<any>
  public indexZeroArticle?: any
  articleId: string = ""

  constructor(private firestoreService: FirestoreService, private router: Router, private activeRouter: ActivatedRoute) {}


  ngOnInit() {

    this.activeRouter.queryParams.subscribe(paths => {
      this.articleId = paths["id"]
    })

    let temp = this.firestoreService.getDoc(`articles/${this.articleId}`)

    console.log(temp)
    this.article = temp

    this.article?.subscribe((v) => {
      console.log(v)
    })
  }
}
