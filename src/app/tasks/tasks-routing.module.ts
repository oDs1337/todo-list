import { SingleTaskComponent } from './containers/single-task/single-task.component';
import { TasksComponent } from './containers/tasks/tasks.component';
import { NgModule, Input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full', },
  { path: 'tasks', component: TasksComponent, },
  { path: 'single-task/:id', component: SingleTaskComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TasksRoutingModule { }
