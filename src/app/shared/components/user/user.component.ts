import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public user?: Observable<any>
  @Input() userId: string = ""


  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    let temp = this.firestoreService.getCollection(`users/${this.userId}`)

    if(temp instanceof Observable<any>) {
      this.user = temp

      this.user.subscribe(test => {
        console.log("test: ", test)
      })
    }
  }
}

