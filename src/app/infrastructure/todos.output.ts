import { Todo } from "../data/todo";

export interface TodosOutput {
    getTodos(): Promise<Todo[]>;
    addTodoItem(todo: Todo): Promise<Todo>; 
    toggleComplete(todo: Todo): Promise<Todo>;
    removeTodoItem(todo: Todo): Promise<Todo>;
}