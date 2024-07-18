import { Todo } from "../../data/todo";
import styles from "./todo-list.module.scss"
import { Error } from "@/components/error/error"
import { TodoListView } from "./todo-list.view";
import { useEffect, useState } from "react";
import { dataOutputs } from "../../config/outputs";
import { getTodos } from "../../domain/todo.actions";


export const TodosListContainer = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [error, setError] = useState<string>('');

useEffect(() => {
	_getTodos();
}, []);

const _getTodos = async () => {
	try {
		const todos = await getTodos(
			{todosOutput: dataOutputs.todos}
		); 
		setTodos(todos)
		setError('');
	} catch(error: any) {
		setError(error.message);
	}	
}
return (
  
        <TodoListView  
			todos={todos}
			error={error}
			setTodos={setTodos}
		/>
   
)
}
