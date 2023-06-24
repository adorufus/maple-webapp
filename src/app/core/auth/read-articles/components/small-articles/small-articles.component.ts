import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-small-articles',
  templateUrl: './small-articles.component.html',
  styleUrls: ['./small-articles.component.scss']
})
export class SmallArticlesComponent implements OnInit {

  public articles?: Observable<any[]>
  public indexZeroArticle?: any

  constructor(private firestoreService: FirestoreService, private router: Router) {}

  ngOnInit() {
    let temp = this.firestoreService.getCollection("articles", (ref) => ref.orderBy("created_time", "desc").limit(5))

    if(temp instanceof Observable<any>) {
      this.articles = temp

      this.articles.subscribe(test => {
        console.log("test: ", test)
        this.indexZeroArticle = test[0]
      })
    }
  }

  readClick(articleId: string) {
    this.router.navigate(['/read-articles'], {
      queryParams: {
        id: articleId
      }
    })

    setTimeout(()=>{
      
      window.location.reload();
    }, 100);
  }

}
