import { Task } from './../interfaces/task';
import { createAction, props } from "@ngrx/store";

export const fetch = createAction('[TASKS COMPONENT] fetch', props<{tasks: Task[]}>());
