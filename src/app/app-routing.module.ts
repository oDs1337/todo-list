import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full'},
  { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) },
  { path: 'add-task', loadChildren: () => import('./add-task/add-task.module').then(m => m.AddTaskModule), },
  { path: 'edit-task/:id', loadChildren: () => import('./edit-task/edit-task.module').then(m => m.EditTaskModule), },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
