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
  public article?: Observable<any>
  articleId: string = ""

  constructor(private firestoreService: FirestoreService, private router: Router, private activeRouter: ActivatedRoute) {}

  backClick() {
    this.router.navigate(['/article'])
    window.scroll(0,0)
  }

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
