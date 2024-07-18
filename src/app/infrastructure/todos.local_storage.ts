import { Todo } from "../data/todo";
import { TodosOutput } from "./todos.output";

export class TodosLocalStorage implements TodosOutput {

    getTodos(): Promise<Todo[]> {
        const todos: Todo[] = this.getLocalTodos();
        return Promise.resolve(todos);
    }

    setTodos(todos: Todo[]): void {
        localStorage.setItem('todos', JSON.stringify(todos));   
    }
    addTodoItem(todo: Todo): Promise<Todo[]> {
        return Promise.resolve(this.getLocalTodos()).then((todos: Todo[]) => {
            const isTodoExists: boolean = todos.find((t: Todo) => t.title === todo.title) !== undefined;
            if(!isTodoExists) {
                todos.push(todo);
                this.setTodos(todos);
            }
            return todos;
        });
    }
    toggleComplete(todo: Todo): Promise<Todo> {
        throw new Error("Method not implemented.");
    }
    removeTodoItem(todo: Todo): Promise<Todo[]> {
        return Promise.resolve(this.getTodos()).then((todos: Todo[]) => {
			todos = [...todos.filter((todo: Todo) => todo.title !== todo.title)]

			this.setTodos(todos)
			return todos
		})
    }
    getLocalTodos(): Todo[] {
        const todos: string | null = localStorage.getItem('todos');
        return todos ? JSON.parse(todos): [];
    }
}