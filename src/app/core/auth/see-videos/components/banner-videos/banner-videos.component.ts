import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-videos',
  templateUrl: './banner-videos.component.html',
  styleUrls: ['./banner-videos.component.scss']
})
export class BannerVideosComponent {
 @Input() bannerImage: string=''

 @Input() runnerColor: string='#6123AD'

 @Input() runnerText: string=''

 @Input() textImage: string=''

 constructor() {
  console.log(this.textImage)
}
}
