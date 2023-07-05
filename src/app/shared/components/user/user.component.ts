import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public user?: Observable<any>
  @Input() userId: string = ""
  @Input() imageUrl: string = ""


  constructor(private fAuth: AngularFireAuth) {}

  ngOnInit() {

    this.imageUrl = this.imageUrl.replace("s96-c", "s400-c")
  }

  onLogout() {
    this.fAuth.signOut().then(() => {
      console.log("user logged out")
    })
  }
}

