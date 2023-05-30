import { Component } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

interface content {
  title: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      900: {
        items: 5
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

  ngOnInit(): void {
  }
}
