import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Observable } from 'rxjs';

interface content {
  title: string;
}

@Component({
  selector: 'app-banner-play',
  templateUrl: './banner-play.component.html',
  styleUrls: ['./banner-play.component.scss'],
})
export class BannerPlayComponent implements OnInit {
  public videos?: Observable<any[]>;
  public indexZeroVideo?: any;
  @Input() title: string = '';

  constructor(
    private router: Router,
    private firestoreService: FirestoreService
  ) {}

  ngOnInit(): void {
    console.log(this.title);
    let temp =
      this.title == 'Latest Video'
        ? this.firestoreService.getCollection('media', (ref) =>
            ref.orderBy('upload_date', 'desc').limit(5)
          )
        : this.firestoreService.getCollection('media', (ref) =>
            ref
              .where('type', '==', this.title)
              .orderBy('upload_date', 'desc')
              .limit(9)
          );

    if (temp instanceof Observable<any>) {
      this.videos = temp;

      this.videos.subscribe((test) => {
        console.log(test);
      });
    }
  }

  onVideo(vidID:string, uid:string) {
    this.router.navigate(['/play-video'],{
      queryParams: {id: vidID, uid: uid}
    })
   

    setTimeout(()=>{
      
      window.location.reload();
    }, 100);

 
    
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: false,
    navText: [
      "<div class='nav-button owl-prev'>‹</div>",
      "<div class='nav-button owl-next'>›</div>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
    nav: false,
  };
  contentData: content[] = [
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
