import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-small-detail',
  templateUrl: './small-detail.component.html',
  styleUrls: ['./small-detail.component.scss'],
})
export class SmallDetailComponent {
  @Input() title: string = '';
  public games?: Observable<any[]>;

  constructor(
    private firestoreService: FirestoreService,
    private router: Router
  ) {}

  ngOnInit() {
    let temp = this.firestoreService.getCollection(
      'activity/games/quiz',
      (ref) => ref.limit(5)
    );

    if (temp instanceof Observable<any>) {
      this.games = temp;

      this.games.subscribe((test) => {
        console.log('test: ', test);
      });
    }
  }

  onClick(uid: string) {
    this.router.navigate(['/detail-activation'], {
      queryParams: { uid: uid },
    });

    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}
