import { TemplateBindingParseResult } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import {OwlOptions} from "ngx-owl-carousel-o";


interface content {
  title: string;
}

@Component({
  selector: 'app-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.scss']
  
})
export class PlayVideoComponent implements OnInit {

@Input () vidID: string=""

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(paths => {
      this.vidID = paths["id"] 
    })
  }

  playerConfig = {
    controls : 1,
    mute: 0,
    autoplay: 1
  };
  
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
