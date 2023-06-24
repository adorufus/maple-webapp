import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from "rxjs";
import { FirestoreService } from 'src/app/services/firestore.service';

interface content {
  title: string;
}

@Component({
  selector: 'app-daftar-video',
  templateUrl: './daftar-video.component.html',
  styleUrls: ['./daftar-video.component.scss'],
})
export class DaftarVideoComponent implements OnInit {

  public videos?: Observable<any[]>
  public indexZeroVideo?: any

  constructor(private router: Router, private firestoreService: FirestoreService) {}

  ngOnInit() {
    console.log(this.title)
    let temp = this.title == 'Latest Video' ? this.firestoreService.getCollection("media", (ref) => ref.orderBy("upload_date", "desc").limit(5)) : this.firestoreService.getCollection("media", (ref) => ref.where('type', '==', this.title).orderBy("upload_date", "desc").limit(9))

    if(temp instanceof Observable<any>) {
      this.videos = temp

      this.videos.subscribe(test => {
        console.log(test)
        this.indexZeroVideo = test[0]
      })
      
    }
  }

  @Input() title: string = ""


  onVideo(vidID:string, uid:string) {
    this.router.navigate(['/play-video'],{
      queryParams: {id: vidID, uid: uid}
    })
    window.scroll (0,0)
  }


  checkForColor(): string {
    let color: string

    if(this.title.toLowerCase() == 'rewind') {
      color = '#00EDFF'
    } else if(this.title.toLowerCase() == 'can!') {
      color = '#FF4D00'
    } else if(this.title.toLowerCase() == 'wander') {
      color = '#A3FF00'
    } else if(this.title.toLowerCase() == 'trick room') {
      color = '#EA4335'
    } else if(this.title.toLowerCase() == 'unscene') {
      color = '#000000'
    } else if(this.title.toLowerCase() == 'dixi') {
      color = '#FF5AD1'
    } else if(this.title.toLowerCase() == 'playroom') {
      color = '#FFE800'
    } else if(this.title.toLowerCase() == 'all') {
      color = '#6123AD'
    }

    else {
      color = 'default color'
    }

    return color
  }

  checkForImage(): string {
    let image: string

    if(this.title.toLowerCase() == 'rewind') {
      image = 'assets/images/banner-rewind.png'
    } else if(this.title.toLowerCase() == 'all') {
      image = 'assets/images/banner-videos.png'
    } else if(this.title.toLowerCase() == 'trick room') {
      image = 'assets/images/banner-videos.png'
    } else if(this.title.toLowerCase() == 'unscene') {
      image = 'assets/images/banner-videos.png'
    } else if(this.title.toLowerCase() == 'dixi') {
      image = 'assets/images/banner-videos.png'
    } else if(this.title.toLowerCase() == 'playroom') {
      image = 'assets/images/banner-videos.png'
    } else if(this.title.toLowerCase() == 'wander') {
      image = 'assets/images/banner-videos.png'
    } else if(this.title.toLowerCase() == 'can!') {
      image = 'assets/images/banner-can.png'
    }

    else {
      image = 'default image'
    }

    return image

  }
}
