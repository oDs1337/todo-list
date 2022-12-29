import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TasksDatabaseService } from 'src/app/shared/services/tasks-database.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Task } from './../../../interfaces/task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {

  #routeSubscription?: Subscription;
  #taskSubscription?: Subscription;
  #urlId?: string;
  task: Task = {
    creationDate: '',
    expiryDate: '',
    taskDescription: '',
    isDone: false,
  }
  editTaskForm!: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private database: TasksDatabaseService, private store: Store<{ tasks: Task[]}>) { }

  ngOnInit(){
    this.#routeSubscription = this.route.params
      .subscribe(params => {
        this.#urlId = params['id'];
      })

    this.getTask();

    this.editTaskForm = new FormGroup({
      creationDate: new FormControl(new Date(parseInt(this.task.creationDate)), [
        Validators.required,
        Validators.nullValidator,
      ]),
      expiryDate: new FormControl(new Date(parseInt(this.task.expiryDate)), [
        Validators.required,
        Validators.nullValidator,
      ]),
      taskDescription: new FormControl(`${this.task.taskDescription}`, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(57),
      ]),
      isDone: new FormControl(this.task.isDone, [
        Validators.required,
        Validators.nullValidator,
      ]),
    })
  }

  ngOnDestroy(){
    this.#routeSubscription?.unsubscribe();
    this.#taskSubscription?.unsubscribe();
  }

  getTask(): void{
    this.#taskSubscription = this.store.select((state) => state.tasks)
      .subscribe((res) =>{
        res.forEach((element) => {
          if(element.id === this.#urlId){
            this.task = element;
          }
        })
      })
  }

  onSubmit(formValues: any): void{
    const payload: Task = {
      id: this.task.id,
      creationDate: `${Math.floor(formValues.creationDate)}`,
      expiryDate: `${Math.floor(formValues.expiryDate)}`,
      taskDescription: formValues.taskDescription,
      isDone: formValues.isDone,
    }
    this.database.modifyTask(payload);
    this.router.navigate(['tasks']);
    alert('Your task has been modified sucessfully');
  }


}
