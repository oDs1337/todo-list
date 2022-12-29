import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../../interfaces/task';
import { Store } from '@ngrx/store';
import { fetch } from 'src/app/state/tasks.action';

@Injectable({
  providedIn: 'root'
})
export class TasksDatabaseService {

  #databaseUrl = "http://[::1]:3000/tasks?filter=%7B%0A%20%20%22offset%22%3A%200%2C%0A%20%20%22limit%22%3A%20100%2C%0A%20%20%22skip%22%3A%200%2C%0A%20%20%22order%22%3A%20%22string%22%2C%0A%20%20%22where%22%3A%20%7B%0A%20%20%20%20%22additionalProp1%22%3A%20%7B%7D%0A%20%20%7D%2C%0A%20%20%22fields%22%3A%20%7B%0A%20%20%20%20%22id%22%3A%20true%2C%0A%20%20%20%20%22creationDate%22%3A%20true%2C%0A%20%20%20%20%22expiryDate%22%3A%20true%2C%0A%20%20%20%20%22taskDescription%22%3A%20true%2C%0A%20%20%20%20%22isDone%22%3A%20true%2C%0A%20%20%20%20%22isRemoved%22%3A%20true%2C%0A%20%20%20%20%22removedDate%22%3A%20true%0A%20%20%7D%0A%7D";
  #tasksUrl = "http://[::1]:3000/tasks/";

  constructor(private http: HttpClient, private store: Store) { }


  fetchTasks(): void{
    this.http.get<Task[]>(this.#databaseUrl).subscribe((res) => {
      this.store.dispatch(fetch({ tasks: res}))
    });
  }

  modifyTask(task: Task): void{
    this.http.put<Task>(`${this.#tasksUrl}${task.id}`, task).subscribe();
  }

  createTask(task: Task): void{
    this.http.post<Task>(this.#tasksUrl, task).subscribe();
  }

  deleteTask(taskId: string): void{
    this.http.delete(`${this.#tasksUrl}${taskId}`).subscribe();
  }
}
