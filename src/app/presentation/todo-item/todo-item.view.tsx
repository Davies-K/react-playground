import { Todo } from "@/app/data/todo"
import { Error } from "@/components/error/error"
import styles from "./todo-item.module.scss"
import React from "react"
interface Props {  
    todo: Todo
    errorRemove: string
    errorComplete: string
    removeTodo: (event: any) => void
    completeTodo: () => void
}

export const TodoView = ({todo, errorRemove, errorComplete, removeTodo, completeTodo}: Props) => { 
    return (
		<li
			key={todo.title}
			className={
				styles.container +
				(todo.isDone ? " " + styles.isCompleted : "")
			}
			onClick={completeTodo}
			onContextMenu={removeTodo}
		>
			{todo.title}

			<Error error={errorComplete} />
			<Error error={errorRemove} />
		</li>
	)
}