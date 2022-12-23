import { Task } from './../../../interfaces/task';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent {

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
      Validators.maxLength(25),
    ]),
    isDone: new FormControl(false, [
      Validators.required,
      Validators.nullValidator,
    ]),
  })

  onSubmit(value: any){
    console.log(value)
  }
}
