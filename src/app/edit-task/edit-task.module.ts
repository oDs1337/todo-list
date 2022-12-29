import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditTaskRoutingModule } from './edit-task-routing.module';
import { EditTaskComponent } from './containers/edit-task/edit-task.component';


@NgModule({
  declarations: [
    EditTaskComponent
  ],
  imports: [
    CommonModule,
    EditTaskRoutingModule
  ]
})
export class EditTaskModule { }
