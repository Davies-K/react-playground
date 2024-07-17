'use client';

import { useState } from "react";

interface TodoItem {
  text: string;
}

export default function Home() {

  const [todoList, setTodoList] = useState<string[]>([
    'Go for a run', 
    'Attend that meeting',
    'Get groceries', 
    'Go to bed too late'
  ]);

  const [newTodoItem, setNewTodoList] = useState<string>('');


  const addTodoItem = () => {
    const newTodoList = todoList.concat(newTodoItem); 
    setTodoList(newTodoList)
  }

  const markTodoItem = (markedItem: string, isMarked: boolean) => { 
    if(isMarked) {
      const newTodoList = todoList.filter((item) => item !== markedItem);
      setTodoList(newTodoList);
    }
  }
  return (
    <>
      <main >
        <h1 >
          Todo
        </h1>
        <div >
          <div >
            <ul>
              {todoList.map((todoItem) => (
                <li key={todoItem}>
                  <input type="checkbox" onChange={ (e) => markTodoItem(todoItem, e.target.checked) } />
                  <span>{todoItem}</span>
                </li>
              ))}
            </ul>
          </div>
          <div >
            <h2>Add New Item</h2>
              <p>
                <input type="text" onChange={ (e) => { setNewTodoList(e.target.value) } } />
                <button onClick={addTodoItem}>Add</button>
              </p>
          </div>
        </div>
      </main>
    </>
  );
}
