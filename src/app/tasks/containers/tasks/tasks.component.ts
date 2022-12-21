import { Task } from './../../../interfaces/task';
import { Component } from '@angular/core';
import { TasksDatabaseService } from 'src/app/shared/services/tasks-database.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks?: Task[];
  undoneTasks?: Task[];
  doneTasks?: Task[];

  constructor(private database: TasksDatabaseService) { }

  ngOnInit(): void{
    this.database.fetchTasks();
    this.tasks = this.database.getTasks();
    this.sortTasks();
  }

  sortTasks(): void{
    if(!!this.tasks){
      console.log('tasks is null')
      console.log(this.tasks)
    }
    else{
      console.log(`tasks aren't null`)
      console.log(this.tasks)
    }
  }

}
