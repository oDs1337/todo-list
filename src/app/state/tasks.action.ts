import { Task } from './../interfaces/task';
import { createAction, props } from "@ngrx/store";

export const fetchTasks = createAction('[TASKS COMPONENT] fetchTasks', props<{tasks: Task[]}>());
