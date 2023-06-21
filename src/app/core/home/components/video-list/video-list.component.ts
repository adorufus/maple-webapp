import {Component, Input, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {map, Observable} from "rxjs";
import {FirestoreService} from "../../../../services/firestore.service";
import { Router } from '@angular/router';


interface content {
  title: string;
}

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})


export class VideoListComponent implements OnInit {

 
  @Input() title: string = ""

  videos?: Observable<any[]>

  constructor(private firestoreService: FirestoreService, private router: Router) {

  }

  

  ngOnInit() {
    console.log(this.title)
    let temp = this.title == 'Latest Video' ? this.firestoreService.getCollection("media", (ref) => ref.orderBy("upload_date", "desc").limit(5)) : this.firestoreService.getCollection("media", (ref) => ref.where('type', '==', this.title).orderBy("upload_date", "desc").limit(5))

    if(temp instanceof Observable<any>) {
      this.videos = temp

      this.videos.subscribe(test => {
        console.log(test)
      })
    }
  }

  onVideo(title:String) {
    this.router.navigate(['/play-video'],{
      queryParams: {id: title}
    })
    window.scroll (0,0)
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    center: false,
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
    }
  ];

  
}



