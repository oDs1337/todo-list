import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksBoxComponent } from './presenters/tasks-box/tasks-box.component';
import { TasksComponent } from './containers/tasks/tasks.component';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    TasksBoxComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MatCheckboxModule,
  ],
  exports: [
    TasksBoxComponent,
  ]
})
export class TasksModule { }
