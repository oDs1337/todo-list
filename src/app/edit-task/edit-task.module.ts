import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditTaskRoutingModule } from './edit-task-routing.module';
import { EditTaskComponent } from './containers/edit-task/edit-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    EditTaskComponent
  ],
  imports: [
    CommonModule,
    EditTaskRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class EditTaskModule { }
