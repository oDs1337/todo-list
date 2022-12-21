import { Task } from './../../../interfaces/task';
import { Component, Input } from '@angular/core';
import { confirmationAlert } from 'src/app/shared/components/nav-bar/checkboxManagment/checkboxAlert';

@Component({
  selector: 'app-tasks-box',
  templateUrl: './tasks-box.component.html',
  styleUrls: ['./tasks-box.component.css']
})
export class TasksBoxComponent {

  @Input() tasks: Task[] = [];
  @Input() done: boolean = false;

  checkboxManagment(){
    confirmationAlert();
  }

}
