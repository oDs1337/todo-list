import { Task } from './../../../interfaces/task';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent {

  addTaskForm = new FormGroup({
    creationDate: new FormControl(''),
    expiryDate: new FormControl(''),
    taskDescription: new FormControl(''),
    isDone: new FormControl(''),
  })

  onSubmit(value: any){
    console.log(value)
  }
}
