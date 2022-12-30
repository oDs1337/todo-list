import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/shared/interfaces/task';

@Component({
  selector: 'app-removed-tasks-box',
  templateUrl: './removed-tasks-box.component.html',
  styleUrls: ['./removed-tasks-box.component.css']
})
export class RemovedTasksBoxComponent {

  @Input() removedTasks?: Task[];
  @Output() restore = new EventEmitter<Task>();
  @Output() delete = new EventEmitter<string>();

  onRestorePressed(task: Task): void{
    this.restore.emit(task);
  }

  onDeletePressed(id: string): void{
    this.delete.emit(id);
  }

}
