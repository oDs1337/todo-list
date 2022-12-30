import { TasksDatabaseService } from 'src/app/shared/services/tasks-database.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Task } from '../../../shared/interfaces/task';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})


export class SingleTaskComponent implements OnInit, OnDestroy {

  #routeSubscription?: Subscription;
  #taskSubscription?: Subscription;
  #urlId?: string;
  singleTask?: Task;

  constructor(private database: TasksDatabaseService,private router: Router,private route: ActivatedRoute, private store: Store<{ tasks: Task[]}>) { }

  ngOnInit(){
    this.#routeSubscription = this.route.params
      .subscribe(params => {
        this.#urlId = params['id'];
      })

    this.getTask();
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
            this.singleTask = element;
          }
        })
      })
  }

  removePressed(task: Task): void{
    const payload: Task = {
      ...task,
      isRemoved: true,
      removedDate: `${Date.now()}`,
    }
    this.database.modifyTask(payload);
    this.router.navigateByUrl('tasks');
    alert('task has been removed sucessfully');
  }

}
