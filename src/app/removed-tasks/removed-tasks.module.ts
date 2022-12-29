import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemovedTasksRoutingModule } from './removed-tasks-routing.module';
import { RemovedTasksComponent } from './containers/removed-tasks/removed-tasks.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    RemovedTasksComponent
  ],
  imports: [
    CommonModule,
    RemovedTasksRoutingModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    RemovedTasksComponent
  ]
})
export class RemovedTasksModule { }
