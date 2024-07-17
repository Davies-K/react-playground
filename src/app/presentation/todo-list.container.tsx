import { Todo } from "../data/todo";
import styles from "./todo-list.module.scss"
import { Error } from "@/components/error/error"

interface Props {
    todos: Todo[]; 
    error: string; 
    setTodos: (todos: Todo[]) => void;
}

export const TodosListContainer = (props: Props) => {
return (
    <>
        <h1 className={styles.title}>Todos</h1>
        {/* <AddTodoFormContainer setTodos={setTodos} /> */}

			<Error error={props.error} />

			<ul className={styles.container}>
				{props.todos.map((todo: Todo) => (
					<TodoItemContainer
						key={todo.title}
						todo={todo}
						setTodos={setTodos}
					/>
				))}
			</ul>

			<div className={styles.information}>
				Left click to complete todo
				<br />
				Right click or long touch on mobile to remove todo
			</div>
    </>
);
}