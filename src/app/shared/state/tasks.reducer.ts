import { Task } from "../interfaces/task";
import { createReducer, on } from "@ngrx/store";
import { fetch } from "./tasks.action";

export const initialState: Task[] = [];

export const tasksReducer = createReducer(
    initialState,
    on(fetch, (state, action) => action.tasks),
)
