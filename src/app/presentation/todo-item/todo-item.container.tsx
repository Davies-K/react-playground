import { Todo } from "@/app/data/todo";
import { useState } from "react";
import { TodoView } from "./todo-item.view";


interface Props {
    todo: Todo; 
    setTodos: (todo: Todo[]) => void
}


export const TodoItemContainer = ({todo, setTodos} : Props) => { 
    const [errorComplete , setErrorComplete] = useState<string>('');
    const [errorRemove , setErrorRemove] = useState<string>(''); 


    const _completeTodo = async () => {}

    const _removeTodo = async (todo: Todo) => {}

    return (
        <TodoView 
            todo={todo}
            errorComplete={errorComplete}
            errorRemove={errorRemove}
            removeTodo={_removeTodo} 
            completeTodo={_completeTodo}
            />
    )
}