import { useState } from "react"
import { TodoFormView } from "./todo-form.view"
import { addTodo } from "@/app/domain/todo.actions"
import { Todo } from "@/app/data/todo"
import { dataOutputs } from "@/app/config/outputs"

interface Props {
    setTodos: (todo: Todo[]) => void
}

export const TodoFormContainer = ({setTodos} : Props) => { 

    const [todoTitle, setTodoTitle] = useState<string>("")
	const [errorToAddTodo, setErrorToAddTodo] = useState<string>("")

	const onChangeTodoTitle = (event: any) => {
		const title: string = event.target.value
       
		setTodoTitle(title)
	}

	const onSubmit = async (event: any) => {
        event.preventDefault()
        var todo = new Todo({title: todoTitle, isDone: false})
        try {
            const todos: Todo[] = await addTodo({
                todosOutput: dataOutputs.todos,
                todoTitle,
            })

            setTodos(todos)

            setTodoTitle("")
            setErrorToAddTodo("")
        } catch (error: any) {
            setErrorToAddTodo(error.message)
        }
	}
    
    return (
        <TodoFormView onSubmit={function (event: any): void {
            throw new Error("Function not implemented.")
        } } todoTitle={""} onChangeTodoTitle={function (event: any): void {
            throw new Error("Function not implemented.")
        } } errorToAddTodo={""} />
    )
}