import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksBoxComponent } from './presenters/tasks-box/tasks-box.component';
import { TasksComponent } from './containers/tasks/tasks.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { SingleTaskComponent } from './containers/single-task/single-task.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TasksBoxComponent,
    TasksComponent,
    SingleTaskComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MatCheckboxModule,
    MatButtonModule,
    RouterModule,
  ],
  exports: [
    TasksBoxComponent,
  ]
})
export class TasksModule { }
