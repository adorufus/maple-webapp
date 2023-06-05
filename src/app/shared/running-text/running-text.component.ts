import {Component, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-running-text',
  templateUrl: './running-text.component.html',
  styleUrls: ['./running-text.component.scss']
})
export class RunningTextComponent {
  @Input() runningText: string = "Maple Media";
  @Input() backgroundColor: string = "blue";

}
