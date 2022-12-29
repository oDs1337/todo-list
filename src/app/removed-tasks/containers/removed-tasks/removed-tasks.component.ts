import { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TasksDatabaseService } from 'src/app/shared/services/tasks-database.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-removed-tasks',
  templateUrl: './removed-tasks.component.html',
  styleUrls: ['./removed-tasks.component.css']
})
export class RemovedTasksComponent {

  #tasksSubscription = new Subscription();
  #tasks: Task[] = [];
  removedTasks: Task[] = [];
  constructor(private database: TasksDatabaseService, private store: Store<{ tasks: Task[] }>) { }

  ngOnInit(){
    this.database.fetchTasks();
    this.getTasks();
  }

  ngOnDestroy(){
    this.#tasksSubscription.unsubscribe();
  }

  getTasks(): void{
    this.#tasksSubscription = this.store.select((state) => state.tasks)
      .subscribe((res) => {
        this.#tasks = res;
        this.getRemovedTasks();
        console.log(this.removedTasks);
      })
  }

  getRemovedTasks(): void{
    this.removedTasks = [];
    this.#tasks.forEach((element) => {
      //TODO isRemoved instead of isDone
      if(element.isDone === true){
        this.removedTasks.push(element)
      }
    })
  }

  onRestorePressed(task: Task): void{
    console.log(task);
  }

  onDeletePressed(id: string): void{
    console.log(id);
  }
}
