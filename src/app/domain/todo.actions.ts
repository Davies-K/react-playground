import { Todo } from "../data/todo"
import { TodosOutput } from "../infrastructure/todos.output"


export const getTodos = async ({
	todosOutput,
}: {
	todosOutput: TodosOutput
}): Promise<Todo[]> => {
	try {
		return await todosOutput.getTodos()
	} catch (error: any) {
		throw new Error(error)
	}
}

export const removeTodo = async ({
	todo, 
	todosOutput
}: {
	todo: Todo, 
	todosOutput: TodosOutput
}) : Promise<Todo> => {
	try {
		return await todosOutput.removeTodoItem(todo)
	} catch(error: any) {
		throw new Error(error)
	}
}

export const addTodo = async ({
	todo, 
	todosOutput
}: {
	todo: Todo, 
	todosOutput: TodosOutput
}) : Promise<Todo> => {
	try {
		return await todosOutput.addTodoItem(todo)
	} catch(error: any) {
		throw new Error(error)
	}
}