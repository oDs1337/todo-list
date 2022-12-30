import { Router } from '@angular/router';
import { Task } from '../../../shared/interfaces/task';
import { Component, Input } from '@angular/core';
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

  constructor(private router: Router) { }

  onCheckboxChange(value: Task){
    this.check.emit(value);
  }

  routeToSingleTask(id: string){
    this.router.navigateByUrl(`tasks/single-task/${id}`);
  }

}
