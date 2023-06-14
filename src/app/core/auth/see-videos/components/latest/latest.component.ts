import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit {

  title: string = ""
  
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
      this.route.queryParams.subscribe(paths => {
        console.log(paths["segment"])
        this.title = paths["segment"] == "all" ? "Latest Videos" : paths["segment"]
      })
  }

}
