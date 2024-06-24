import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-read-articles',
  templateUrl: './read-articles.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./read-articles.component.scss']
})
export class ReadArticlesComponent implements OnInit {

  // public articles?: Observable<any[]>
  public article?: Observable<any>
  articleId: string = ""
  public relatedArticle?: Observable<any[]>
  limit: number = 3



  constructor(private firestoreService: FirestoreService, private router: Router, private activeRouter: ActivatedRoute) {}


  readClick(arg0: any) {
    this.router.navigate(['/read-articles'], {
      queryParams: {
        id: arg0
      }
    })

    setTimeout(()=>{
      
      window.location.reload();
    }, 100);
  }

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

    let relatedTemp = this.firestoreService.getCollection("articles", (ref) => ref.orderBy("created_time", "desc").limit(4))

    if(relatedTemp instanceof Observable<any>) {
      this.relatedArticle = relatedTemp
    }

    this.article?.subscribe((v) => {
      console.log(v)
    })
  }
}
