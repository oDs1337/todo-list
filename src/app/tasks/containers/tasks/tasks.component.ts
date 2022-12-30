import { Task } from 'src/app/shared/interfaces/task';
import { Subscription, } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TasksDatabaseService } from 'src/app/shared/services/tasks-database.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit, OnDestroy {

  tasksSubscription = new Subscription();
  undoneTasks: Task[] = [];
  doneTasks: Task[] = [];

  constructor(private database: TasksDatabaseService, private store: Store<{ tasks: Task[]}>) { }

  ngOnInit(): void{
    this.database.fetchTasks();
    this.getTasks();
  }

  ngOnDestroy(): void{
    this.tasksSubscription.unsubscribe;
  }

  getTasks(): void {
    this.tasksSubscription = this.store.select((state) => state.tasks)
      .subscribe((res) => {
        const { doneTasks, undoneTasks } = this.sortTasks(res);
        this.doneTasks = doneTasks;
        this.undoneTasks = undoneTasks;
      })
  }


  sortTasks(tasks: Task[]) {
    const sortedTasks: {
      doneTasks: Task[];
      undoneTasks: Task[];
    } = {
       doneTasks: [],
       undoneTasks: [],
    }

    tasks.forEach((element) => {
      if(element.isDone === true){
        sortedTasks.doneTasks.push(element);
      }    else{
        sortedTasks.undoneTasks.push(element)
      }
    })
    return sortedTasks;
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
