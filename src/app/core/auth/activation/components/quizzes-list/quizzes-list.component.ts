import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';

interface content {
  title: string;
}

@Component({
  selector: 'app-quizzes-list',
  templateUrl: './quizzes-list.component.html',
  styleUrls: ['./quizzes-list.component.scss'],
})
export class QuizzesListComponent {
  @Input() title: string = '';
  public games?: Observable<any[]>;

  constructor(
    private router: Router,
    private firestoreService: FirestoreService
  ) {}

  ngOnInit() {
    let temp = this.firestoreService.getCollection(
      'activity/games/quiz',
      (ref) => ref.limit(5)
    );

    if (temp instanceof Observable<any>) {
      this.games = temp;

      this.games.subscribe((test) => {
        console.log('test: ', test);
      });
    }
  }

  onClick(uid: string) {
    this.router.navigate(['/detail-activation'], {
      queryParams: { uid: uid },
    });
    window.scroll(0, 0);
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    dots: true,
    center: true,
    navText: [
      "<div class='nav-button owl-prev'><img  src='assets/images/arrow_back_ios_new.svg'></div>",
      "<div class='nav-button owl-next'><img  src='assets/images/arrow_forward_ios.svg'></div>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      900: {
        items: 3,
      },
    },
    nav: true,
  };
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
    },
  ];
}
