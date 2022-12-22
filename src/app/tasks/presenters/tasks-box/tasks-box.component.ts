import { Task } from './../../../interfaces/task';
import { Component, Input } from '@angular/core';
import { confirmationAlert } from 'src/app/shared/components/nav-bar/checkboxManagment/checkboxAlert';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tasks-box',
  templateUrl: './tasks-box.component.html',
  styleUrls: ['./tasks-box.component.css']
})
export class TasksBoxComponent {

  @Output() check = new EventEmitter<Task>();
  @Input() tasks: Task[] = [];
  @Input() done: boolean = false;

  checkboxManagment(){
    confirmationAlert();
  }

  onCheckboxChange(value: Task){
    this.check.emit(value);
  }

}
