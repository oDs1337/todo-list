import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Task } from './../../../interfaces/task';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})


export class SingleTaskComponent {

  #routeSubscription?: Subscription;
  #taskSubscription?: Subscription;
  #urlId?: string;
  singleTask?: Task;

  constructor(private route: ActivatedRoute, private store: Store<{ tasks: Task[]}>) { }

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

}
