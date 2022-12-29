import { Component, Input } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-task-box',
  templateUrl: './single-task-box.component.html',
  styleUrls: ['./single-task-box.component.css']
})
export class SingleTaskBoxComponent {

  @Input() task?: Task;
  @Output() remove = new EventEmitter<Task>();

  onRemovePressed(task: Task): void{
    this.remove.emit(task);
  }

}
