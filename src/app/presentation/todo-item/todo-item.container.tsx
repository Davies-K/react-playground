import { Todo } from "@/app/data/todo";
import { useState } from "react";


interface Props {
    todo: Todo; 
    setTodos: (todo: Todo[]) => void
}


export const TodoItemContainer = (props: Props) => { 
    const [errorComplete , setErrorComplete] = useState<string>('');
    const [errorRemove , setErrorRemove] = useState<string>(''); 


    const _completeTodo = async (todo: Todo) => {}

    const _removeTodo = async (todo: Todo) => {}
}