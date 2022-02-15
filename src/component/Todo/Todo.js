import React, { useEffect, useState } from 'react';
import TodoList from '../TodoList/TodoList';

const Todo = () => {
    const [todos, setTodo] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data=>setTodo(data))
    },[])
    return (
        <div className='grid grid-cols-2 gap-1 bg-slate-200 px-16'>
            {
                todos.map(todo=><TodoList 
                    key = {todo.id}
                    todo={todo}>

                    </TodoList>)
            }
        </div>
    );
};

export default Todo;