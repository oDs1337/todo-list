import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks-box',
  templateUrl: './tasks-box.component.html',
  styleUrls: ['./tasks-box.component.css']
})
export class TasksBoxComponent {

  @Input() done:boolean = false;

}
