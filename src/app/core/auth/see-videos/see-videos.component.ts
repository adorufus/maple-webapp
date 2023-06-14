import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-see-videos',
  templateUrl: './see-videos.component.html',
  styleUrls: ['./see-videos.component.scss']
})
export class SeeVideosComponent implements OnInit {

  @Input() segmentId: string =""

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
      
  }

  onClick() {
    this.router.navigate([`/media`], {
      queryParams: {segment: this.segmentId}
    })
    window.scroll(0, 0)
  }

}
