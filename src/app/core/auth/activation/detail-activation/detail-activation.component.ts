import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-detail-activation',
  templateUrl: './detail-activation.component.html',
  styleUrls: ['./detail-activation.component.scss']
})
export class DetailActivationComponent {

  public activity?: Observable<any>
  uid: string=""
  type: string=""
  url: SafeResourceUrl = ""

  constructor(private route:ActivatedRoute, private firestoreService:FirestoreService, private sanitizer: DomSanitizer){}


  ngOnInit(): void {
    this.route.queryParams.subscribe(paths => {
      this.uid = paths["uid"]
      this.type = paths["type"]
    })

    const totUrl = 'https://mapleapp-7c7ab.web.app/activity/game/thisorthat?gameId='
    const sopUrl = 'https://mapleapp-7c7ab.web.app/activity/game/smashpass?gameId='

    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(`${(this.type == 'tot' ? totUrl : sopUrl) + this.uid}`)

    let temp = this.firestoreService.getDoc(`activity/games/quiz/${this.uid}`)

    console.log(temp)
    this.activity = temp

    this.activity?.subscribe((v) => {
      console.log(v)
    })



  }
}
