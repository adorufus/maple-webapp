import {Component, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-run-purple',
  templateUrl: './run-purple.component.html',
  styleUrls: ['./run-purple.component.scss']
})
export class RunPurpleComponent {
  @Input() runningText: string = "";
  @Input() backgroundColor: string = "blue";

  constructor() {
    console.log(this.runningText)
  }
}
