import { Component, Input } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import { Router } from '@angular/router';

interface content {
  title: string;
}

@Component({
  selector: 'app-banner-play',
  templateUrl: './banner-play.component.html',
  styleUrls: ['./banner-play.component.scss']
})
export class BannerPlayComponent {
  @Input() title: string = ""

  constructor(private router: Router) {}
  onVideo() {
    this.router.navigate(['/play-video'])
  }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: false,
    navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items:3
      }
    },
    nav: false
  }
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
    }
  ];
}
