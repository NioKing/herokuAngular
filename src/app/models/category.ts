import { Todo } from "./todo";

export interface Category {
    id: number,
    title: string,
    todos: [
        Todo
    ]
}

export class CategoryClass {
    id!: number;
    title!: string;
    todos!: [
        Todo
    ]
}