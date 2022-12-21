import { Task } from "../interfaces/task";
import { createReducer, on } from "@ngrx/store";
import { fetchTasks } from "./tasks.action";

export const initialState: Task[] = [];

export const tasksReducer = createReducer(
    initialState,
    on(fetchTasks, (state, action) => action.tasks),
)
