export interface Todo {
    id: number,
    text: string,
    isCompleted: boolean,
    categoryId: number
}


export class TodoClass {
    id?: number
    text?: string
    isCompleted?: Boolean
    categoryId?: number
}