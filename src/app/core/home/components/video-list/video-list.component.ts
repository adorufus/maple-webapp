import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { map, Observable } from 'rxjs';
import { FirestoreService } from '../../../../services/firestore.service';
import { Router } from '@angular/router';

interface content {
  title: string;
}

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {
  @Input() title: string = '';

  videos?: Observable<any[]>;

  constructor(
    private firestoreService: FirestoreService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.title);
    let temp =
      this.title == 'Latest Videos' || 'Recommended for You'
        ? this.firestoreService.getCollection('media', (ref) =>
            ref.orderBy('upload_date', 'desc').limit(5)
          )
        : this.firestoreService.getCollection('media', (ref) =>
            ref
              .where('type', '==', this.title)
              .orderBy('upload_date', 'desc')
              .limit(5)
          );

    if (temp instanceof Observable<any>) {
      this.videos = temp;

      this.videos.subscribe((test) => {
        console.log(test);
      });
    }
  }

  onShowMore() {
    this.router.navigate(['/segment'], {
      queryParams: {
        type: 'Rewind'
      }
    })
  }

  onVideo(vidID: String, uid: string) {
    this.router.navigate(['/play-video'], {
      queryParams: { id: vidID,uid:uid },
    });
    window.scroll(0, 0);
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    center: false,
    autoWidth: true,

    navText: [
      "<div class='nav-button owl-prev' style='top: 33% !important;'><img  src='assets/images/arrow_back_ios_new.svg'></div>",
      "<div class='nav-button owl-next' style='top: 33% !important;'><img  src='assets/images/arrow_forward_ios.svg'></div>",
    ],
    responsive: {
      0: {
        items: 1,
        nav:false,
      },
      680: {
        items: 2,
      },
      1000: {
        items: 4,
      }
    },
    nav: true,
  };
  contentData: content[] = [
    {
      title: 'CAN!',
    },
    {
      title: 'REWIND',
    },
    {
      title: 'TRICKROOM',
    },
    {
      title: 'UNSCENE',
    },
    {
      title: 'WANDER',
    },
  ];
}
