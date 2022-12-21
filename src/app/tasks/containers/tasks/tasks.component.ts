import { Observable } from 'rxjs';
import { Task } from './../../../interfaces/task';
import { Component } from '@angular/core';
import { TasksDatabaseService } from 'src/app/shared/services/tasks-database.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks$: Observable<Task[]>;
  undoneTasks: Task[] = [];
  doneTasks: Task[] = [];

  constructor(private database: TasksDatabaseService, private store: Store<{ tasks: Task[]}>) {
    this.tasks$ = store.select('tasks');
   }

  ngOnInit(): void{
    this.database.fetchTasks();
    this.sortTasks();
  }

  sortTasks(): void{
    this.tasks$.subscribe((res) => {
      res.forEach((element) => {
        if(element.isDone === true){
          this.doneTasks.push(element);
        }
        else{
          this.undoneTasks.push(element)
        }
      })
    })
  }

}
