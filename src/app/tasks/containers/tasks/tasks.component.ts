import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { TasksDatabaseService } from 'src/app/services/tasks-database.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  constructor(private database: TasksDatabaseService) { }

  ngOnInit(): void{
    this.database.fetchTasks();
  }

}
