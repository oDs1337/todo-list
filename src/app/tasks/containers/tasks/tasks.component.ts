import { Subscription, timer } from 'rxjs';
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

  tasksSubscription = new Subscription();
  undoneTasks: Task[] = [];
  doneTasks: Task[] = [];

  constructor(private database: TasksDatabaseService, private store: Store<{ tasks: Task[]}>) { }

  ngOnInit(): void{
    this.database.fetchTasks();
    this.getTasks();
  }

  ngOnDestry(): void{
    this.tasksSubscription.unsubscribe;
  }

  getTasks(): void{
    this.tasksSubscription = this.store.select((state) => state.tasks)
      .subscribe((res) => {
        this.sortTasks(res);
      })
  }


  sortTasks(test: Task[]): void{
    this.doneTasks = [];
    this.undoneTasks = [];
    test.forEach((element) => {
      if(element.isDone === true){
        this.doneTasks.push(element);
      }
      else{
        this.undoneTasks.push(element)
      }
    })
  }

  checkboxChanged(task: Task): void {
    setTimeout(() => {
      const payload: Task = {
        id: task.id,
        creationDate: task.creationDate,
        expiryDate: task.expiryDate,
        taskDescription: task.taskDescription,
        isDone: this.changeIsDone(task.isDone),
        isRemoved: false,
        removedDate: "0",
      }
      this.database.modifyTask(payload);
      this.database.fetchTasks();
      this.getTasks();
    }, 500);

  }

  changeIsDone(currentValue: boolean){
    return !currentValue;
  }

}
