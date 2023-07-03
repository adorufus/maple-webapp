import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {OwlOptions} from "ngx-owl-carousel-o";
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';

interface content {
  title: string;
}

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent {
  @Input() title: string = ""
  public activity?: Observable<any[]>;
  public indexZeroActivity?: any

  constructor(private router: Router, private firestoreService:FirestoreService) {}

  ngOnInit() {
    let temp = this.firestoreService.getCollection("activity/games/quiz", (ref) => ref.orderBy("created_time", "desc").limit(5))

    if(temp instanceof Observable<any>) {
      this.activity = temp

      this.activity.subscribe(test => {
        console.log("test: ", test)
        this.indexZeroActivity = test[0]
      })
    }
  }

  onClick() {
    this.router.navigate(['/detail-activation'])
    window.scroll(0, 0)
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    center: true,
    navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 3
      }
    },
    nav: true
  }
  contentData: content[] = [
    {
      title: 'New Quizzes',
    },
    {
      title: '',
    },
    {
      title: '',
    },
    {
      title: '',
    },
    {
      title: '',
    }
  ];
}
