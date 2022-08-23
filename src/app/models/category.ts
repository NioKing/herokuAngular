import { Todo } from "./todo";

export interface Category {
    id: number,
    title: string,
    todos: [
        Todo
    ]
}
