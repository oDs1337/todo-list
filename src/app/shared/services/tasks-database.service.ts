import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksDatabaseService {

  #tasks!: Task[];

  #databaseUrl = "http://[::1]:3000/tasks?filter=%7B%0A%20%20%22offset%22%3A%200%2C%0A%20%20%22limit%22%3A%20100%2C%0A%20%20%22skip%22%3A%200%2C%0A%20%20%22order%22%3A%20%22string%22%2C%0A%20%20%22where%22%3A%20%7B%0A%20%20%20%20%22additionalProp1%22%3A%20%7B%7D%0A%20%20%7D%2C%0A%20%20%22fields%22%3A%20%7B%0A%20%20%20%20%22id%22%3A%20true%2C%0A%20%20%20%20%22creationDate%22%3A%20true%2C%0A%20%20%20%20%22expiryDate%22%3A%20true%2C%0A%20%20%20%20%22taskDescription%22%3A%20true%2C%0A%20%20%20%20%22isDone%22%3A%20true%0A%20%20%7D%0A%7D";

  constructor(private http: HttpClient) { }


  fetchTasks(): void{
    this.http.get<Task[]>(this.#databaseUrl).subscribe((res) => {
      this.#tasks = res;
    });
  }

  getTasks(): Task[]{
    return this.#tasks;
  }
}
