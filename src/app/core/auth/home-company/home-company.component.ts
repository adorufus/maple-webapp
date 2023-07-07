import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-company',
  templateUrl: './home-company.component.html',
  styleUrls: ['./home-company.component.scss']
})
export class HomeCompanyComponent{ 

  video = 'assets/images/tes.mp4';

  constructor(private router:Router, private renderer: Renderer2){}

  onCollabClick() {
    this.router.navigate(['/home-company']);
    setTimeout(() => {
      window.scrollTo(0, 2977);
    }, 100);
  }

  playerConfig = {
    controls: 1,
    mute: 0,
    autoplay: 1,
  };
}
