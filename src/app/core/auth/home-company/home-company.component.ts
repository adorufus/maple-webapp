import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-company',
  templateUrl: './home-company.component.html',
  styleUrls: ['./home-company.component.scss']
})
export class HomeCompanyComponent implements OnInit {

  constructor(private router:Router, private renderer: Renderer2){}

  ngOnInit(){
  //   const video = this.renderer.createElement('video');
  //   this.renderer.setStyle(video, 'width', '100%');
  // this.renderer.setStyle(video, 'height', '100%');
  // this.renderer.setStyle(video, 'object-fit', 'cover');
  // this.renderer.setStyle(video, 'z-index', '-1');
  // this.renderer.setAttribute(video, 'autoplay', '');
  // this.renderer.setAttribute(video, 'loop', '');
  // this.renderer.setAttribute(video, 'muted', '');
  // this.renderer.setAttribute(video, 'src', 'assets/images/tes.mp4');
  //
  // this.renderer.appendChild(document.body, video);

  }

  onCollabClick() {
    this.router.navigate(['/company']);
    setTimeout(() => {
      window.scrollTo(0, 2843);
    }, 100);
  }

  playerConfig = {
    controls: 1,
    mute: 0,
    autoplay: 1,
  };
}
