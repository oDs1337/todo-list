import { RemovedTasksComponent } from './containers/removed-tasks/removed-tasks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: RemovedTasksComponent ,},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemovedTasksRoutingModule { }
