import { Task } from '../../../shared/interfaces/task';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TasksDatabaseService } from 'src/app/shared/services/tasks-database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent {

  constructor(private router: Router, private database: TasksDatabaseService) { }

  addTaskForm = new FormGroup({
    creationDate: new FormControl('', [
      Validators.required,
      Validators.nullValidator,
    ]),
    expiryDate: new FormControl('', [
      Validators.required,
      Validators.nullValidator,
    ]),
    taskDescription: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(57),
    ]),
    isDone: new FormControl(false, [
      Validators.required,
      Validators.nullValidator,
    ]),
  })

  onSubmit(formValues: any): void{
    const payload: Task = {
      creationDate: `${Math.floor(formValues.creationDate)}`,
      expiryDate: `${Math.floor(formValues.expiryDate)}`,
      taskDescription: formValues.taskDescription,
      isDone: formValues.isDone,
      isRemoved: false,
      removedDate: "0",
    }
    this.database.createTask(payload);
    this.router.navigate(['tasks']);
    alert(`Your task has been added sucessfully`);
  }
}
