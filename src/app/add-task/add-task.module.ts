import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTaskRoutingModule } from './add-task-routing.module';
import { AddTaskFormComponent } from './containers/add-task-form/add-task-form.component';


@NgModule({
  declarations: [
    AddTaskFormComponent
  ],
  imports: [
    CommonModule,
    AddTaskRoutingModule
  ],
  exports: [
    AddTaskFormComponent
  ]
})
export class AddTaskModule { }
