import { TodosLocalStorage } from "../infrastructure/todos.local_storage";

export const dataOutputs = {
    todos: new TodosLocalStorage(),
}