import { TasksComponent } from './containers/tasks/tasks.component';
import { TasksBoxComponent } from './presenters/tasks-box/tasks-box.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TasksComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
