import { Component, Input, Output } from '@angular/core';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-removed-tasks-box',
  templateUrl: './removed-tasks-box.component.html',
  styleUrls: ['./removed-tasks-box.component.css']
})
export class RemovedTasksBoxComponent {

  @Input() removedTasks?: Task[];

}
