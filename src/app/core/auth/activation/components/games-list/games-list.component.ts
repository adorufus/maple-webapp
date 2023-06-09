import { Component, Input } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

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
