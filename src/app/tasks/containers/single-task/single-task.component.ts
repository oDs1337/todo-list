import { Task } from './../../../interfaces/task';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})


export class SingleTaskComponent {

  @Input() task?: Task



}
