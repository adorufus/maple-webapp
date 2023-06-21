import {Component, Input, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {Observable} from "rxjs";
import {FirestoreService} from "../../../../services/firestore.service";
import { Router } from '@angular/router';

interface content {
  title: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{



  public segments?: Observable<any[]>

  constructor(private firestoreService: FirestoreService, private router:Router) {

  }

  ngOnInit() {
    let temp = this.firestoreService.getCollection("media-type")

    if(temp instanceof Observable<any>) {
      this.segments = temp

      this.segments.subscribe(test => {
        console.log(test)
      })
    }


    
  }

  onClick(title:string) {
    this.router.navigate([`/media`], {
      queryParams: {segment: title}
    })
    window.scroll(0, 0)
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navText:  ["<div class='nav-button owl-prev1'>‹</div>", "<div class='nav-button owl-next1'>›</div>"],
    center: false,
    responsive: {
      0: {
        items: 3
      },
      600: {
        items: 3
      },
      900: {
        items: 5
      }
    },
    nav: false
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
