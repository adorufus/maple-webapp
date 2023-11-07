import { TemplateBindingParseResult } from '@angular/compiler';
import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';

interface content {
  title: string;
}

@Component({
  selector: 'app-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.scss'],
})
export class PlayVideoComponent implements OnInit {
  public indexZeroVideo?: Observable<any>;
  @Input() vidID: string = '';
  @Input() uid: string = '';
  @ViewChild('top', { static: true }) top?: ElementRef;
  innerWidth?: any;

  constructor(
    private route: ActivatedRoute,
    private firestoreService: FirestoreService
  ) {
    this.innerWidth = window.innerWidth
   }

  ngOnInit(): void {

    this.route.queryParams.subscribe((paths) => {
      this.vidID = paths['id'];
      this.uid = paths['uid'];
    });

    let temp = this.firestoreService.getDoc(`media/${this.uid}`);

    console.log(temp);
    this.indexZeroVideo = temp;

    this.indexZeroVideo?.subscribe((v) => {
      console.log(v);
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = event.target.innerWidth;
  }



  playerConfig = {
    controls: 1,
    mute: 0,
    autoplay: 1,
  };

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
