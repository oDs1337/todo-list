import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemovedTasksRoutingModule } from './removed-tasks-routing.module';
import { RemovedTasksComponent } from './containers/removed-tasks/removed-tasks.component';


@NgModule({
  declarations: [
    RemovedTasksComponent
  ],
  imports: [
    CommonModule,
    RemovedTasksRoutingModule
  ],
  exports: [
    RemovedTasksComponent
  ]
})
export class RemovedTasksModule { }
